const POKEMOONJAKE = [
	"Pokemoon forum and server hoster."
];

const Sky Trainer Ash = [
	"PokeMoon Forum Owner And Devoloper."
];

const wolf = [
	"howls to the moon.",
	"runs off into a forest."
];

exports.commands = {
	dc: 'poof',
	disconnect: 'poof',
	disconnected: 'poof',
	cpoof: 'poof',
	poof: function (target, room, user) {
		if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
		if (target && !this.can('broadcast')) return false;
		if (!this.canTalk(message)) return false;
		if (user.name === 'wolf') {
			var message = target || wolf[Math.floor(Math.random() * wolf.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'POKEMOONJAKE') {
			var message = target || pokemoonjake[Math.floor(Math.random() * pokemoonjake.length)];

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'Sky Trainer Ash' || user.name === 'sky trainer ash') {
			var message = target || Sky Trainer Ash[Math.floor(Math.random() * Sky Trainer Ash.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else {
			user.leaveRoom(room);
		}
	},

	poofoff: 'nopoof',
	nopoof: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = true;
		return this.sendReply("Poof is now disabled.");
	},

	poofon: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = false;
		return this.sendReply("Poof is now enabled.");
	}
};
