import { useState } from 'react'
const questions = [
    {
        id: 1,
        question: 'React c\'est quoi ?',
        options: ['Un groupe de punk auvergnat', 'Un perso de FF7', 'Un framework Javascript', 'Un sport d\'équipe'],
        answer: 'Un framework Javascript'
    },
    {
        id: 2,
        question: 'Comment on gère le state en React ?',
        options: ['State ?', 'Avec PHP', 'avec useState()', 'plutot this.state'],
        answer: 'avec useState()'
    },
    {
        id: 3,
        question: 'On aime React ?',
        options: ['React ?', 'C\'est mieux que JS e fait', 'Par moment', 'Oui !'],
        answer: 'Oui !'
    }
] 

function Quizz() {
    const [indexQuestion, setIndexQuestion] = useState(0)
    const [score, setScore] = useState(0)

    function handleClick(option) {
        if (option === questions[indexQuestion].answer) {
            setScore(prevScore => prevScore + 1)
        }
        setIndexQuestion(prevIndex => prevIndex + 1)
    }

    function handleReset() {
        setIndexQuestion(0)
        setScore(0)
    }

    return ( 
        <div className="quiz">
            <h1>Quizz</h1>
            <div className="score">{score} / 3</div>

            { questions[indexQuestion] ?  
                <>
                    <div className="question-section">
                        <h2>{questions[indexQuestion].question}</h2>
                    </div>
                    <div className="options-section">
                        {questions[indexQuestion].options.map(option => (
                            <button onClick={() => handleClick(option)}>{option}</button>
                        ))}
                    </div>
                </> 
                : <button onClick={() => handleReset()}>Restart</button>
            }
        </div>
    )
}

export default Quizz;