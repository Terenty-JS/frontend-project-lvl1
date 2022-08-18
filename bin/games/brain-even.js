import {getRandomInt, getAnswer, lastResult} from '../../src/index.js';

const proverka = (num) => {
    if (num % 2 === 0) return 'yes'; 
    else return 'no';

};
  const result = () => {
    
    let ques = getRandomInt(1000);
        console.log(`Question: ${ques}`)
        let answer = getAnswer(`Your answer: `);
        if( proverka(ques) === answer) {
            return true;
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${proverka(ques)}'`);
            return false;
        }
    }

    lastResult('Answer "yes" if the number is even, otherwise answer "no".', result);