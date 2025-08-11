import Button from "../../components/button";
import image from "../../assets/background.jpg";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <div className={styles["home-container"]}>
      <img src={image} alt="Background" />
      <div className={styles["home-content"]}>
        <h1>Welcome to <code>Quizzical</code></h1>
        <p>Your quiz adventure starts here!</p>
          <Button
              text="Start Quiz"   
              onClick={() => alert("Quiz started!")}
              className="start-quiz-button"
          />
      </div>
    </div>
  );
}