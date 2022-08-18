import { getRandomInt, getAnswer, lastResult } from '../../src/index.js';

const proverka = (num) => {
  if (num % 2 === 0) return 'yes';
  else return 'no';
};

const result = () => {
  const ques = getRandomInt(1000);
  console.log(`Question: ${ques}`);
  const answer = getAnswer('Your answer: ');
  if (proverka(ques) === answer) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${proverka(ques)}'`);
};

lastResult('Answer "yes" if the number is even, otherwise answer "no".', result);
