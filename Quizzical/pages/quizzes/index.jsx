import styles from './Quizzes.module.css';
import { useEffect, useState } from 'react';
import Quiz from '../../components/Quiz';
import Button from '../../components/button';
export default function Quizzes() {
    //states
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //fetch quizzes data
useEffect(() => {
        // Simulate fetching quizzes data
        const fetchQuizzes = async () => {
            //  API call to fetch quizzes
            setLoading(true);
            try {
                const response = await fetch('https://opentdb.com/api.php?amount=10');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setQuizzes(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchQuizzes();
    }, [quizzes]);

    //quizzes elements
    if (loading) {
        return <div className={styles['loading']}>Loading quizzes...</div>;
    }else{
        if (quizzes.length !== 0) {
        console.log("quiz",quizzes)
        const quizEl =  quizzes.map((quiz,index)=>{
            return(
                <Quiz
                    key={index}
                    question={quiz.question}
                    options={[quiz.correct_answer, ...quiz.incorrect_answers]} 
                />

            )
        })
        
        return (
            <div className={styles['quizzes-container']} >
                {quizEl}
            </div>
        );
    }
    }
    if (error) {
        console.log(error)
    }   
    
}