import Button from "../button";
import styles from './Quiz.module.css';
import he from 'he';
export default function Quiz({question, options, onAnswer=() => {}}) {
    // const selectedStyle = {
    //     backgroundColor: "#D6DBF5",
    //     border: "none",
    //     color: "#293264"
    // }
    //handle click option
    const handleClickOption = (option,e) => {
        //change style of the button
        e.preventDefault(); // Prevent button's default behavior
    // Don't call e.stopPropagation() - let event bubble to label
        onAnswer(option);
        // onAnswer(e.target.value)
    };
    const optionElements = options.map((option, index) => (
        
        <label key={index} >
           
            <input
                type="radio"
                name="quiz-option"
                value={he.decode(option)}
                className={styles["radio-input"]}
            />
             <Button
                text={he.decode(option)}
                key={index}
                className={styles["quiz-option"]}
                onClick={(e) => handleClickOption(option,e)}
            />
            
            
        </label>
        ))

    return (
        <div className={styles["quiz-container"]}>
            <h1 className={styles["quiz-question"]}>{he.decode(question)}</h1>
           
            {optionElements}
                
        </div>
    );
}