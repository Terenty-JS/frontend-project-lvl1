import readlineSync from 'readline-sync';

const firstQuestion = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const nameStart = () => {
  console.log('Welcome to the Brain Games!');
  const yourName = firstQuestion();
  return yourName;
};

export default nameStart;
