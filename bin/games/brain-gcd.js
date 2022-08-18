import {getRandomInt, getAnswer, lastResult} from '../../src/index.js';

const right = (first, second) => {
    if (first >= second) {
        const nw = first;
        first = second;
        second = nw;
    }
    let rightAnswer;
    for (let i=1; i <=first; i++){
        if ((first % i === 0)&&(second % i === 0)) rightAnswer = i;
        else continue;
    }
    return rightAnswer;
}

const result = () => {
    let first = getRandomInt(100);
    let second = getRandomInt(100);
    console.log(`Question:${first} ${second}`);
    let answer = getAnswer(`Your answer: `);
    if( right(first, second) == answer) {
        return true;
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${right(first, second)}'`);
        return false;
    }
}

lastResult('Find the greatest common divisor of given numbers.', result);