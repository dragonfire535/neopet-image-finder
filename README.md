# neopet-image-finder
[![Downloads](https://img.shields.io/npm/dt/neopet-image-finder.svg?maxAge=3600)](https://www.npmjs.com/package/discord.js-commando)
[![Version](https://img.shields.io/npm/v/neopet-image-finder.svg?maxAge=3600)](https://www.npmjs.com/package/discord.js-commando)

neopet-image-finder is a very simple module that obtains the pet image links for a Neopet with a given size and mood, searchable by name. It does this by scraping [Sunnyneo's Pet Image Finder](http://www.sunnyneo.com/petimagefinder.php). Usage is extremely simple:

```js
const petImage = require('neopet-image-finder');

petImage('Pikachu53535').then(link => {
	console.log(link);
});
```

`http://pets.neopets.com/cp/rjwlsb8k/1/5.png` would be logged to the console. It returns a promise, so you can `await` it as well.

There are also two optional parameters you can specify, `size` and `mood`.

```js
petImage('Pikachu53535', 4, 2).then(link => {
	console.log(link);
});
```

The sizes (first parameter) are:
1: 50x50
2: 150x150
3: 80x80
4: 300x300
5: 500x500 (Default)

And the moods (second parameter):
1: Happy (Default)
2: Sad
3: Angry
4: Sick
5: No Mouth or Eyes

Both are entirely optional, and will simply default to `500x500` and `Happy` if not specified.
