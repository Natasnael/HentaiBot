const fetch = require('node-fetch');

module.exports = async function(msg, args) {
  msg.channel.send(new MessageAttachment("./path/to/gif/file"))
};
