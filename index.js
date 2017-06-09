const snekfetch = require('snekfetch');
const cheerio = require('cheerio');

module.exports = (name, { size, mood } = {}) => snekfetch
    .get('http://www.sunnyneo.com/petimagefinder.php')
    .query({
        name,
        size: size || 5,
        mood: mood || 1
    })
    .then((res) => {
        const $ = cheerio.load(res.text);
        return $('textarea').first().text();
    });
