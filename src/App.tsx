import React , {useState, useTransition} from 'react';
import Cards from './components/Cards';

const TOTAL_QUESTIONS = 10;

const App = () => {

const [loading , setLoading] = useState(false);
const [questions , setQuestions ] = useState([]);
const [userAnswers , setUserAnswers ] = useState([]);
const [number , setNumber] = useState(0);
const [score , setScore ] = useState(0);
const [gameOver ,  setGameOver] = useState(true);




const startTrivia  = async () => {

}

const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {

}

const nextQuestion = () => {

}

  return (
    <div>
      <h1>MUSIC QUESTIONS</h1>
      <button className='' onClick={startTrivia}>
        Start
      </button>
      <p className='' >SCORE:</p>
      <p className=''>LOADING QUESTIONS ....</p>
      <Cards 
      questionNr={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      />
      
      <button className='' onClick={nextQuestion}>
        NEXT QUESTION
      </button>
    </div>
  );
}

export default App;
