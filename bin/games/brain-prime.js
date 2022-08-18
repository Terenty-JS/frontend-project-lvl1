import {getRandomInt, getAnswer, lastResult} from '../../src/index.js';

const exersice = (n) => {
   
    if (n < 2) {
        return 'no';
    } 
    else if (n === 2) {
        return 'yes';
    }
      
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
        if (n % i === 0) {
            return 'no';
        }
        i +=1;
        }
        return 'yes';
}

const result = () => {
    let ques = getRandomInt(100)
    let rightAnswer = exersice(ques);
    console.log(`Question: ${ques}`);
    
    let answer = getAnswer(`Your answer: `);
    if( rightAnswer == answer) {
        return true;
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
        return false;
    }
}


lastResult('Answer "yes" if given number is prime. Otherwise answer "no".', result);