const snekfetch = require('snekfetch');

module.exports = (name, { size, mood } = {}) => {
	if (typeof name !== 'string') throw new TypeError('name must be a string.');
	if (size && typeof size !== 'number') throw new TypeError('size must be a number or falsey.');
	if (size && (size < 1 || size > 5)) throw new RangeError('size must be a number between 1 and 5.');
	if (mood && typeof mood !== 'number') throw new TypeError('mood must be a number or falsey.');
	if (mood && (mood < 1 || mood > 5)) throw new RangeError('mood must be a number between 1 and 5.');
	return snekfetch
		.get('http://www.sunnyneo.com/petimagefinder.php')
		.query({
			name,
			size: size || 5,
			mood: mood || 1
		})
		.then(({ text }) => {
			const link = text.match(/http:\/\/pets\.neopets\.com\/cp\/.+\.png/);
			if (!link) throw new Error('Invalid Neopet name.');
			return link[0];
		});
};
