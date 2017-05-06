const request = require('superagent');
const cheerio = require('cheerio');

module.exports = (name, options = { size: 5, mood: 1 }) => {
    if(!options.size) options.size = 5;
    if(!options.mood) options.mood = 1;
    return request
        .get(`http://www.sunnyneo.com/petimagefinder.php?name=${name}&size=${options.size}&mood=${options.mood}`)
        .then(response => {
            const $ = cheerio.load(response.text);
            const link = $('textarea').first().text();
            return link;
        });
};
