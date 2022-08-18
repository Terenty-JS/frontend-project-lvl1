#!/usr/bin/env node

import { getRandomInt, getAnswer, lastResult } from '../src/index.js';

const exersice = () => {
  const item = [];
  const indexes = [5, 6, 7, 8, 9, 10];
  const rand = Math.floor(Math.random() * indexes.length);
  let first = getRandomInt(100);
  const d = getRandomInt(6);
  for (let i = 0; i < indexes[rand]; i += 1) {
    item.push(first);
    first += d;
  }
  const rand1 = Math.floor(Math.random() * item.length);
  if (rand1 !== -1) {
    item[rand1] = '..';
  }
  return item;
};

const right = (item) => {
  let rightAnswer;
  for (let i = 0; i < item.length; i += 1) {
    if (i === 0 && item[0] === '..') {
      const d = item[3] - item[2];
      rightAnswer = item[1] - d;
    } else if (i === item.length - 1 && item[i] === '..') {
      const d = item[i - 1] - item[i - 2];
      rightAnswer = item[i - 1] + d;
    } else if (item[i] === '..') {
      rightAnswer = (item[i - 1] + item[i + 1]) / 2;
    }
  }
  return rightAnswer;
};

const result = () => {
  const exercise = exersice();
  console.log(`Question: ${exercise.join(' ')}`);
  const answer = getAnswer('Your answer: ');
  if (right(exercise) == answer) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${right(exercise)}'`);
};

lastResult('What number is missing in the progression?', result);
