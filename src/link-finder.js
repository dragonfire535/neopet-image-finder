const snekfetch = require('snekfetch');
const cheerio = require('cheerio');

module.exports = (name, options = {}) => {
    if(!options.size) options.size = 5;
    if(!options.mood) options.mood = 1;
    return snekfetch
        .get('http://www.sunnyneo.com/petimagefinder.php')
        .query({
            name: name,
            size: options.size,
            mood: options.mood
        })
        .end((err, res) => {
            return new Promise((resolve, reject) => {
                if (err) reject(err);
                else {
                    const $ = cheerio.load(res.text);
                    const link = $('textarea').first().text();
                    resolve(link);
                }
            });
        });
};
