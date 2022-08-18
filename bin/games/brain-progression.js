import {getRandomInt, getAnswer, lastResult} from '../../src/index.js';

const exersice = () => {
    let item = [];
    let indexes = [5, 6, 7, 8, 9, 10];
    let rand = Math.floor(Math.random() * indexes.length);
    let first = getRandomInt(100);
    let d = getRandomInt(6);
    for (let i = 0; i < indexes[rand]; i++){
       item.push(first);
        first += d;
    }
    let rand1 = Math.floor(Math.random() * item.length);
    if (rand1 !== -1) {
    item[rand1] = '..';
    }
    return item;

}

const right = (item) => {
    let rightAnswer
    for (let i = 0; i < item.length; i++) {
        if (i === 0 && item[0] === '..') {
            const d = item[3]-item[2];
            rightAnswer = item[1] - d;
        }
        else if (i === item.length-1 && item[i] === '..'){
            const d = item[i-1]-item[i-2];
            rightAnswer = item[i-1] + d;
        }
        else if (item[i] === '..') {
            rightAnswer = (item[i-1]+item[i+1])/2;
        }
    }
    return rightAnswer;
}

const result = () => {
    let exercise = exersice();
    let rightAnswer = right(exercise);
    console.log(`Question: ${exercise}`);
    let answer = getAnswer(`Your answer: `);
    if( rightAnswer == answer) {
        return true;
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
        return false;
    }
}


lastResult('What number is missing in the progression?', result);