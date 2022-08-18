#!/usr/bin/env node

import { getRandomInt, getAnswer, lastResult } from '../src/index.js';

const right = (first, second) => {
  let rightAnswer;
  if (first >= second) {
    for (let i = 1; i <= first; i += 1) {
      if ((first % i === 0) && (second % i === 0)) rightAnswer = i;
    }
  } else {
    for (let i = 1; i <= second; i += 1) {
      if ((first % i === 0) && (second % i === 0)) rightAnswer = i;
    }
  }
  return rightAnswer;
};

const result = () => {
  const first = getRandomInt(100);
  const second = getRandomInt(100);
  console.log(`Question: ${first} ${second}`);
  const answer = getAnswer('Your answer: ');
  if (String(right(first, second)) === String(answer)) {
    return true;
  }
  return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${right(first, second)}'`);
};

lastResult('Find the greatest common divisor of given numbers.', result);
