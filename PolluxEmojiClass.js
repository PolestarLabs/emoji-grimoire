const emojibank = require('./EmojiList');
const globalEmojis = [];


async function createShallowEmojiBank(PLX) {
  PLX.guilds.forEach(async (G) => {
    G.emojis.forEach(async (e) => {
      globalEmojis.push(e);
    });
  });
}

function getShallowEmoji(identifier) {
  const EMJ = globalEmojis.find((ge) => ge.id === identifier
    || ge.name === identifier
    || ge.name.toLowerCase() === identifier.toLowerCase());
  if (!EMJ) return false;
  EMJ.string = `<${EMJ.animated ? "a" : ""}:${EMJ.name}:${EMJ.id}>`;
  return EMJ;
}

class PolluxEmoji extends String {
  constructor(identifier, fallback) {
    const print = emojibank[identifier]
      || getShallowEmoji(identifier).string
      || getShallowEmoji(fallback || "____").string
      || fallback
      || "⬜";

    super(`${print} `);
    this.reaction = print.replace("<:", "").replace("<a:", "").replace(">", "");
    this.no_space = print.replace(/ +/g, "");
    [this.name, this.id] = this.reaction.replace("a:", "").split(":");
  }
}

module.exports = { PolluxEmoji, createShallowEmojiBank };