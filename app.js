const { access_token, post } = require('./config.json'),
    https = require('https'),
    querystring = require('node:querystring'),
    crypto = require('crypto'),
    pattern = ["❤", "💜", "💛", "💚", "💙", "🖤"];

setInterval(async () => {
    https.get("https://api.vk.com/method/wall.createComment?" +
                      querystring.stringify(Object.assign({ access_token, text: pattern[crypto.randomInt(pattern.length)], v: "5.83" }, post)), res => {
        res.setEncoding('utf8');
        res.once("data", data => {
            const { response, error } = JSON.parse(data);

            if(error) console.log(`\x1b[31m> \x1b[0mКомментарий не был оставлен \x1b[31m| \x1b[0m(${error.error_msg})\x1b[0m`);
            else console.log(`\x1b[36m> \x1b[0mКомментарий оставлен \x1b[36m| \x1b[0m${response.comment_id}\x1b[0m`);
        });
    })
}, 15000);