const pokemoonjake = [
	"Pokemoon forum and server hoster!"
];

const skytrainerash = [
	"went to find people to flop on.",
	"got swallowed whole by a Snorlax."
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
		} else if (user.name === 'Sky Trainer Ash' || user.name === 'Sky Trainer Ash') {
			var message = target || skytrainerash[Math.floor(Math.random() * skytrainerash.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'Anrin Das' || user.name === 'Anrin N') {
			var message = target || anrindas[Math.floor(Math.random() * anrindas.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'AxTheeFrost' || user.name === 'Andy Venus') {
			var message = target || axtheefrost[Math.floor(Math.random() * axtheefrost.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'Bidoof FTW') {
			var message = target || bidoofftw[Math.floor(Math.random() * bidoofftw.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'Cаѕtfоrm') {
			var message = target || ctfrm[Math.floor(Math.random() * ctfrm.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'Christοs') {
			var message = target || christs[Math.floor(Math.random() * christs.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'Dark Light1999') {
			var message = target || darklight1999[Math.floor(Math.random() * darklight1999.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'Dark Shadow 6') {
			var message = target || darkshadow6[Math.floor(Math.random() * darkshadow6.length)];

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'Hannu Mikkola') {
			var message = target || hannumikkola[Math.floor(Math.random() * hannumikkola.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'indiancharizard#' || user.name === 'IndianCharizard#' || user.name === 'Astraea') {
			var message = target || indiancharizard[Math.floor(Math.random() * indiancharizard.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'Kingdom of Tea') {
			var message = target || kingdomoftea[Math.floor(Math.random() * kingdomoftea.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);

			room.addRaw(Tools.escapeHTML(message));
			user.leaveRoom(room);
		} else if (user.name === 'srinator') {
			var message = target || srinator[Math.floor(Math.random() * srinator.length)];

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
