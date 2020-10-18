let config = require('./config.json');
const rq = require('prequest');

const hearts = ["❤", "💜", "💛", "💚", "💙", "🖤"];

setInterval(() => {
	config.tokens.map(x => {
		rq(`https://api.vk.com/method/wall.createComment?owner_id=${config.owner_id}&post_id=${config.post_id}&access_token=${x}&v=5.83&text=${encodeURI(hearts[Math.floor(Math.random() * hearts.length)])}`).then(res => {
			if(!res['response']) console.log(`\x1b[31mКомментарий не был оставлен | ${x} (${res['error'].error_msg})\x1b[0m`);
			else console.log(`\x1b[32mКомментарий оставлен.\x1b[0m`);
		});
	});
}, config.cd);