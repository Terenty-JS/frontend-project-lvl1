#!/usr/bin/env node

import { getRandomInt, getAnswer, lastResult } from '../src/index.js';

const exersice = (n) => {
  if (n < 2) return 'no';
  else if (n === 2) return 'yes';
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const result = () => {
  const ques = getRandomInt(100);
  console.log(`Question: ${ques}`);
  const answer = getAnswer('Your answer: ');
  if (exersice(ques) === answer) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${exersice(ques)}'`);
};

lastResult('Answer "yes" if given number is prime. Otherwise answer "no".', result);
