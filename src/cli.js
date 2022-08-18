import readlineSync from 'readline-sync';

const firstQuestion = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export {firstQuestion};
