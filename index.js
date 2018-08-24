const request = require('node-superfetch');

module.exports = (name, { size = 5, mood = 1 } = {}) => {
	if (typeof name !== 'string') throw new TypeError('name must be a string.');
	if (typeof size !== 'number' || size < 1 || size > 7) throw new TypeError('size must be a number from 1-7.');
	if (typeof mood !== 'number' || mood < 1 || mood > 5) throw new TypeError('mood must be a number from 1-5.');
	return request
		.get('http://www.sunnyneo.com/petimagefinder.php')
		.query({ name, size, mood })
		.then(({ text }) => {
			const link = text.match(/http:\/\/pets\.neopets\.com\/cp\/.+\.png/);
			if (!link) return null;
			return link[0];
		});
};
