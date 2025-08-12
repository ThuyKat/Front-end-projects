import Button from "../button";
import styles from './Quiz.module.css';
export default function Quiz({question, options, onAnswer}) {

    //handle click option
    const handleClickOption = (option) => {
        option.classList.add(styles["selected"]);
        onAnswer(option);
    };
    const optionElements = options.map((option, index) => (
        <Button
            text={option}
            key={index}
            className={styles["quiz-option"]}
            onClick={(option)=>handleClickOption(option)}
        />))

    return (
        <div className="quiz-container">
            <h1 className="quiz-question">{question}</h1>
           
            {optionElements}
                
        </div>
    );
}