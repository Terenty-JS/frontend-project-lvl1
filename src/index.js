import readlineSync from 'readline-sync';
import nameStart from './cli.js';

const getAnswer = (ques) => readlineSync.question(ques);

const getRandomInt = (max) => Math.floor(Math.random() * max + 1);

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
