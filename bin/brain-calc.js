#!/usr/bin/env node

import { getRandomInt, getAnswer, lastResult } from '../src/index.js';

const result = () => {
  const symbol = ['+', '-', '*'];
  let rand = Math.floor(Math.random() * symbol.length);
  let first = getRandomInt(100);
  let second = getRandomInt(100);
  let znak = symbol[rand]
  console.log(`Question: ${first} ${znak} ${second}`);
  const answer = getAnswer('Your answer: ');
  if (eval(first + znak + second) == answer) {
    return true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${eval(first + znak + second)}'`);
    return false;
  }
};

lastResult('What is the result of the expression?', result);
