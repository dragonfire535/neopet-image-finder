const snekfetch = require('snekfetch');

module.exports = (name, { size, mood } = {}) => snekfetch
	.get('http://www.sunnyneo.com/petimagefinder.php')
	.query({
		name,
		size: size || 5,
		mood: mood || 1
	})
	.then(res => {
		const link = res.text.match(/http:\/\/pets\.neopets\.com\/cp\/.+\.png/);
		if (!link) throw new Error('Invalid Pet Name.');
		return link[0];
	});
