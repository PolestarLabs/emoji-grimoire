const  { PolluxEmoji, createShallowEmojiBank } = require("./PolluxEmojiClass");

module.exports = {
    initialize(PLX){
        createShallowEmojiBank(PLX);
        global._emoji = (e,f) => new PolluxEmoji(e,f);
    }
}