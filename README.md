# neopet-image-finder
[![Downloads](https://img.shields.io/npm/dt/neopet-image-finder.svg?maxAge=3600)](https://www.npmjs.com/package/neopet-image-finder)
[![Version](https://img.shields.io/npm/v/neopet-image-finder.svg?maxAge=3600)](https://www.npmjs.com/package/neopet-image-finder)
[![Travis](https://api.travis-ci.org/dragonfire535/neopet-image-finder.svg?branch=master)](https://travis-ci.org/dragonfire535/neopet-image-finder)

neopet-image-finder is a very simple module that obtains the pet image links for
a Neopet with a given size and mood, searchable by name. Usage is extremely simple:

```js
const petImage = require('neopet-image-finder');

petImage('Pikachu53535').then(res => console.log(res)).catch(console.error);
```

The response would be similar to this:

```js
{
	data: <Buffer>,
	url: 'http://pets.neopets.com/cp/jd68fd89/1/5.png'
}
```

It returns a promise, so you can `await` it as well. If the pet is not found, it
returns null instead.

```js
try {
	const { url } = await petImage('Pikachu53535');
	if (!url) return null;
	console.log(url);
} catch (err) {
	console.error(err);
}
```

There are also two options you can specify, `size` and `mood`.

```js
petImage('Pikachu53535', { size: 2, mood: 4 }).then(res => console.log(res.url)).catch(console.error);
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
