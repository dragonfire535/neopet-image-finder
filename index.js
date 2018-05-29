const snekfetch = require('snekfetch');

module.exports = (name, { size = 5, mood = 1 } = {}) => {
	if (typeof name !== 'string') throw new TypeError('name must be a string.');
	if (typeof size !== 'number' || size < 1 || size > 7) throw new TypeError('size must be a number from 1-7.');
	if (typeof mood !== 'number' || mood < 1 || mood > 5) throw new TypeError('mood must be a number from 1-5.');
	return snekfetch
		.get('http://www.sunnyneo.com/petimagefinder.php')
		.query({ name, size, mood })
		.then(({ raw }) => {
			const link = raw.toString().match(/http:\/\/pets\.neopets\.com\/cp\/.+\.png/);
			if (!link) throw new Error(`Could not find a Neopet with the name ${name}.`);
			return link[0];
		});
};
