const answers = require("../answers");

console.log(`Unsolved problem : ${answers.reduce((list, a, i) => a === null ? [...list, i] : list, []).join(', ')}`);