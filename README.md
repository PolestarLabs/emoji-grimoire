# emoji-grimoire

```js
require('@polestar/emoji-grimoire').initialize(Client);
_emoji(emojiName, fallBackEmoji);
```
  - Fallback is Optional, can take String (emoji name) or another `_emoji(E,F)` ad infinitum.
  - Injects itself in global scope.
  
```js
_emoji("yep");
//returns
[String (PolluxEmoji): '<:YEP:763616714914922527> '] {
  reaction: 'YEP:763616714914922527',
  no_space: '<:YEP:763616714914922527>',
  name: 'YEP',
  id: '763616714914922527'
}

```
