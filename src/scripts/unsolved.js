const fs = require('fs');
const answers = require("../answers");

const problemsWithoutAnswers = answers.reduce((list, a, i) => a === null ? [...list, i] : list, []);
const sortedUnsolvedProblems = {
    wip: [],
    notStarted: []
};

for (const problemWithoutAnswer of problemsWithoutAnswers) {
    if (!fs.existsSync(`./src/problems/${String(problemWithoutAnswer).padStart(3, '0')}.js`)) {
        sortedUnsolvedProblems.notStarted.push(problemWithoutAnswer);
    } else {
        sortedUnsolvedProblems.wip.push(problemWithoutAnswer);
    }
}

console.log(`Unsolved problem WIP : ${format(sortedUnsolvedProblems.wip).join(', ')}`);
console.log(`Unsolved problem : ${format(sortedUnsolvedProblems.notStarted).join(', ')}`);

function format(arr) {
    const transformedArray = [];
    let rangeStart = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            if (rangeStart === arr[i - 1]) {
                transformedArray.push(rangeStart);
            } else {
                if (rangeStart + 1 === arr[i - 1]) {
                    transformedArray.push(rangeStart);
                    transformedArray.push(arr[i - 1]);
                } else {
                    transformedArray.push([rangeStart, arr[i - 1]]);
                }
            }
            rangeStart = arr[i];
        }
    }

    if (rangeStart === arr[arr.length - 1]) {
        transformedArray.push(rangeStart);
    } else {
        transformedArray.push([rangeStart, arr[arr.length - 1]]);
    }

    return transformedArray.map(item => Array.isArray(item) ? `${item[0]} -> ${item[1]}` : item);
}
