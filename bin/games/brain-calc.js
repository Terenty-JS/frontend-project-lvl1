import { getRandomInt, getAnswer, lastResult } from '../../src/index.js';

const exersice = () => {
  const symbol = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * symbol.length);
  return getRandomInt(100) + symbol[rand] + getRandomInt(100);
};

const result = () => {
  const exercise = exersice();
  console.log(`Question: ${exercise}`);
  const answer = getAnswer('Your answer: ');
  if (eval(exercise) == answer) {
    return true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${eval(exercise)}'`);
    return false;
  }
};

lastResult('What is the result of the expression?', result);
