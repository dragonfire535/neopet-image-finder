# neopet-image-finder
[![Downloads](https://img.shields.io/npm/dt/neopet-image-finder.svg?maxAge=3600)](https://www.npmjs.com/package/neopet-image-finder)
[![Version](https://img.shields.io/npm/v/neopet-image-finder.svg?maxAge=3600)](https://www.npmjs.com/package/neopet-image-finder)
[![Travis](https://api.travis-ci.org/dragonfire535/neopet-image-finder.svg?branch=master)](https://travis-ci.org/dragonfire535/neopet-image-finder)

neopet-image-finder is a very simple module that obtains the pet image links for
a Neopet with a given size and mood, searchable by name. It does this by scraping
[Sunnyneo's Pet Image Finder](http://www.sunnyneo.com/petimagefinder.php). Usage
is extremely simple:

```js
const petImage = require('neopet-image-finder');

petImage('Pikachu53535').then(link => console.log(link)).catch(console.error);
```

`http://pets.neopets.com/cp/rjwlsb8k/1/5.png` would be logged to the console. It
returns a promise, so you can `await` it as well.

```js
try {
	const link = await petImage('Pikachu53535');
	console.log(link);
} catch (err) {
	console.error(err);
}
```

There are also two options you can specify, `size` and `mood`.

```js
petImage('Pikachu53535', { size: 2, mood: 4 }).then(link => console.log(link)).catch(console.error);
```

Sizes:
1. 50x50, Portrait
2. 150x150
3. 80x80
4. 300x300
5. 500x500 (Default)
6. 150x150, Portrait
7. 640x640

Moods:
1. Happy (Default)
2. Sad
3. Angry
4. Sick
5. No Mouth or Eyes

Both are entirely optional, and will simply default to `500x500` and `Happy` if
not specified.
