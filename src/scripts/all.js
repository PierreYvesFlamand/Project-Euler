const answers = require("../answers");
const formatScriptTime = require("../utils/formatScriptTime");

for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    if (answer === null) continue;

    const scriptNumber = String(i + 1).padStart(3, '0');

    const SCRIPT_START_AT = Date.now();
    const scriptAnswer = require(`../problems/${scriptNumber}.js`);
    const SCRIPT_END_AT = Date.now();

    console.log(`${answer === scriptAnswer ? '✅' : '❌'} Problem ${scriptNumber} : ${scriptAnswer} - [${formatScriptTime(SCRIPT_END_AT - SCRIPT_START_AT).join(' ')}]`);
}