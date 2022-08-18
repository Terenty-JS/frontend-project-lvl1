#!/usr/bin/env node

import { getRandomInt, getAnswer, lastResult } from '../src/index.js';

const preresult = (first, znak, second) => {
  let answer;
  if (znak === '+') answer = first + second;
  if (znak === '-') answer = first - second;
  if (znak === '*') answer = first * second;
  return answer;
};

const result = () => {
  const symbol = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * symbol.length);
  const first = getRandomInt(100);
  const second = getRandomInt(100);
  const znak = symbol[rand];
  console.log(`Question: ${first} ${znak} ${second}`);
  const answer = getAnswer('Your answer: ');
  if (String(preresult(first, znak, second)) === String(answer)) {
    return true;
  }
  return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${preresult(first, znak, second)}'`);
};

lastResult('What is the result of the expression?', result);
