import React from 'react'

type Props = {
    question : string;
    answer : string [];
    callback : any;
    userAnswer : string;
    questionNr : number;
    totalQuestions: number;

}


const Cards : React.FC<Props> = (
    {
        question,
        answer,
        callback,
        userAnswer,
        questionNr,
        totalQuestions,
    }
) => {
  return (
    <div>
        <p>Questions : {questionNr}/{totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html : question}}></p>
        <div>
            {answer.map(answer => (
                <div>
                    <button  onClick={callback}></button>
                    <span dangerouslySetInnerHTML={{__html : answer}}></span>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Cards