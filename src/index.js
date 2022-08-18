import readlineSync from 'readline-sync';

const getAnswer = ( ques ) => {
    return readlineSync.question( ques );
}

const firstQuestion = () => {
    const name = getAnswer( 'May I have your name? ' );
    console.log(`Hello, ${name}!`);
    return name;
  };

  const nameStart = () => {
    console.log('Welcome to the Brain Games!');
    return firstQuestion();
     
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const lastResult = (quesStart, resultCb) => {
    let name = nameStart();
    console.log(quesStart);
    
    for( let i = 0; i < 3; i++ ){
    
        if(resultCb() ) {
            console.log('Correct!')
            if( i === 2 ) console.log(`Congratulations, ${name}!`)
        }
        else {
            console.log(`Let's try again, ${name}!`)
            break;
        }
    }

}

export {getRandomInt, getAnswer, lastResult};