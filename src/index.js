const fs = require('fs');
const answers = require('./answers');
const formatScriptTime = require('./utils/formatScriptTime');

// Get the script
const scriptNumber = process.argv[2] || null;
if (!scriptNumber) {
    console.error(`You must provide a problem number\n==> npm run [test|dev] [problem_number]`);
    process.exit();
}

const scriptNumberMax = process.argv[3] || process.argv[2];

for (let i = scriptNumber; i <= scriptNumberMax; i++) {
    runScript(i);
    console.log();
}

function runScript(scriptNumber) {
    const scriptPath = `problems/${scriptNumber.toString().padStart(3, '0')}`;

    if (!fs.existsSync(`./src/${scriptPath}.js`)) {
        console.error(`No script for problem ${scriptNumber}`);
    }

    // Before
    const answer = answers[scriptNumber - 1];
    blockLog(`Problem ${scriptNumber}${answer !== null ? ` - [Answer: ${answer}]` : ''}`);
    const SCRIPT_START_AT = Date.now();

    // Script
    const scriptAnswer = require(`./${scriptPath}`);
    console.log(`${answer !== null && scriptAnswer ? `${answer === scriptAnswer ? '✅' : '❌'} ` : '▶️  '}${scriptAnswer}`);

    // After
    const SCRIPT_END_AT = Date.now();

    blockLog(`Duration : ${formatScriptTime(SCRIPT_END_AT - SCRIPT_START_AT).join(' ')}`);
}

function blockLog(string) {
    string = `| ${string} |`;
    console.log(` ${'-'.repeat(string.length - 2)} `);
    console.log(string);
    console.log(` ${'-'.repeat(string.length - 2)} `);
}