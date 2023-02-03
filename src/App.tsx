import React , {useState, useTransition} from 'react';
import Cards from './components/Cards';
import { fetchQuizQuestions } from './API';
import {QuestionsState , Difficulty } from './API';




type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {

const [loading , setLoading] = useState(false);
const [questions , setQuestions ] = useState<QuestionsState[]>([]);
const [userAnswers , setUserAnswers ] = useState<AnswerObject[]>([]);
const [number , setNumber] = useState(0);
const [score , setScore ] = useState(0);
const [gameOver ,  setGameOver] = useState(true);

console.log(questions);
// console.log(fetchQuizQuestions(TOTAL_QUESTIONS , Difficulty.EASY));

const startTrivia  = async () => {

  setLoading(true);
  setGameOver(false);


const newQuestions = await  fetchQuizQuestions(
  TOTAL_QUESTIONS,
  Difficulty.EASY
);

setQuestions(newQuestions);
  setScore(0);
  setUserAnswers([]);
  setNumber(0);
  setLoading(false);

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
      {/* <Cards 
      questionNr={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      /> */}
      
      <button className='' onClick={nextQuestion}>
        NEXT QUESTION
      </button>
    </div>
  );
}

export default App;
