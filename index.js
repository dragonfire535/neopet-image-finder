const snekfetch = require('snekfetch');
const cheerio = require('cheerio');

module.exports = (name, size, mood) => {
    size = size || 5;
    mood = mood || 1;
    return snekfetch
        .get(`http://www.sunnyneo.com/petimagefinder.php?name=${name}&size=${size}&mood=${mood}`)
        .then(response => {
            const $ = cheerio.load(response.text);
            const link = $('textarea').first().text();
            return link;
        });
};
