//the start of challenge one//
let message = "There is no war in Ba Sing Se"
function challengeOne(message) {
    const words = message.trim().split(/\s+/);
    const wordCount = words.length;
    
    return wordCount;
    console.log(`The message contains ${wordCount} words.`);
}//the end of challenge one//
//the start of challenge two//

let countries = ['China', 'Japan', 'South Korea', 'Vietnam', 'Malaysia'];
let capitals = ['Beijing', 'Tokyo', 'Seoul', 'Hanoi', 'Kuala Lumpur'];

for (let i = 0; i < countries.length; i++) {
    console.log(`Your country: ${countries[i]} has the capital named: ${capitals[i]}.`);
}//the end of challenge two//
//the start of challenge three//
let randomizer = Math.floor(Math.random() * 4);
let fate;
if (randomizer === 0) {
    fate = "A certain victory";
} else if (randomizer === 1) {
    fate = "not so certain victory";
} else if (randomizer === 2) {
    fate = "an uneasy victory";
} else {
    fate = "Your fate is unclear, ô chosen undead";
}
console.log(fate);
//the end of challenge three//
//the start of challenge four//

function checkSeason(month) {
    
    month = month.toLowerCase();

    
    if (['december', 'january', 'february'].includes(month)) {
        return 'Winter';
    } else if (['march', 'april', 'may'].includes(month)) {
        return 'Spring';
    } else if (['june', 'july', 'august'].includes(month)) {
        return 'Summer';
    } else if (['september', 'october', 'november'].includes(month)) {
        return 'Autumn';
    } else {
        return 'erreur';
    }
}


console.log(checkSeason('March'));
console.log(checkSeason('july'));  
console.log(checkSeason('November'));
console.log(checkSeason('Hello')); 
//the end of challenge four//