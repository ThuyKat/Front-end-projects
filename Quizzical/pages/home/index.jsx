import Button from "../../components/button";
import image from "../../assets/background.jpg";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate("/quizzes");
  };
  /*
  OTHER OPTIONS:
  - Wrap button in a Link component
  */
  return (
    <div className={styles["home-container"]}>
      <img src={image} alt="Background" />
      <div className={styles["home-content"]}>
        <h1>Welcome to <code>Quizzical</code></h1>
        <p>Your quiz adventure starts here!</p>
          <Button
              text="Start Quiz"   
              onClick={handleStartQuiz}
              className="start-quiz-button"
          />
      </div>
    </div>
  );
}