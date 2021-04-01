const  { PolluxEmoji, createShallowEmojiBank } = require("./PolluxEmojiClass");

module.exports = {
    initialize(PLX){
        createShallowEmojiBank(PLX);
        global._emoji = PolluxEmoji
    }
}