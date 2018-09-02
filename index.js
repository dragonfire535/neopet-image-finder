const request = require('node-superfetch');

module.exports = (name, { size = 5, mood = 1 } = {}) => {
	if (typeof name !== 'string') throw new TypeError('name must be a string.');
	if (typeof size !== 'number' || size < 1 || size > 7) throw new TypeError('size must be a number from 1-7.');
	if (typeof mood !== 'number' || mood < 1 || mood > 5) throw new TypeError('mood must be a number from 1-5.');
	return request
		.get(`http://pets.neopets.com/cpn/${encodeURIComponent(name)}/${mood}/${size}.png`)
		.then(res => ({ data: res.body, url: res.url }))
		.catch(() => null);
};
