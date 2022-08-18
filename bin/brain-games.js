#!/usr/bin/env node

import { firstQuestion } from '../src/cli.js';

const nameStart = () => {
  console.log('Welcome to the Brain Games!');
  const yourName = firstQuestion();
  return yourName;
};

nameStart()

export default nameStart;
