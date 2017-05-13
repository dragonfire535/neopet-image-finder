const petImage = require('./index');

petImage('Pikachu53535', { size: 2, mood: 3 }).then(link => {
	console.log(link);
});
