import readlineSync from 'readline-sync';
import { firstQuestion } from './cli.js';

const getAnswer = (ques) => readlineSync.question(ques);

const nameStart = () => {
  console.log('Welcome to the Brain Games!');
  return firstQuestion();
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

const lastResult = (quesStart, resultCb) => {
  const name = nameStart();
  console.log(quesStart);
  for (let i = 0; i < 3; i += 1) {
    if (resultCb()) {
      console.log('Correct!');
      if (i === 2) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export { getRandomInt, getAnswer, lastResult };
