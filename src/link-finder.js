const snekfetch = require('snekfetch');
const cheerio = require('cheerio');

module.exports = (name, options = {}) => {
    if(!options.size) options.size = 5;
    if(!options.mood) options.mood = 1;
    return snekfetch
        .get('http://www.sunnyneo.com/petimagefinder.php')
        .query({
            name,
            size: options.size,
            mood: options.mood
        })
        .then(response => {
            const $ = cheerio.load(response.text);
            const link = $('textarea').first().text();
            return link;
        });
};
