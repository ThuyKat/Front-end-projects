import { useState } from "react";
import Language from "./Language";
import { languages } from "../languages";
import Input from "./Input";
import Letter from "./Letter";
export default function Main() {
  const [guessWord, setGuessWord] = useState("Hello");
  const [guesses, setGuesses] = useState([]);

  function generateNewGame() {
    setGuessWord("Hello");
    setGuesses([]);
  }
  const wrongGuessesCount = guesses.filter(
    (char) => !guessWord.includes(char)
  ).length;
  const inputChars = guessWord
    .split("")
    .map((char) => ({ value: char, isShown: false }));
  const gameWon =
    wrongGuessesCount <= 8 && inputChars.every((charObj) => charObj.isShown);
  const gameOver = wrongGuessesCount >= 8 || gameWon;
  // coding langauges
  const languagesEl = languages.map((lang, index) => {
    const isGone = index < wrongGuessesCount ? true : false;

    return (
      <Language
        key={lang.id}
        name={lang.name}
        color={lang.color}
        backgroundColor={lang.backgroundColor}
        isGone={isGone}
      />
    );
  });
  // guess word
  const inputWordEl = inputChars.map((charObj, index) => {
    const isShown =
      guesses.includes(charObj.value) && guessWord.includes(charObj.value);
    return <Input key={index} char={charObj.value} isShown={isShown} />;
  });
  //click on to a char -> check if char is included in guess word --> reveal guessword+ change background color of char to green --> if not color of char is changed to red + one language is crossed out + display farewell message
  function handleLetterClick(char) {
    setGuesses((prevGuesses) => [...prevGuesses, char]);
  }
  /*
  Comment: 
  1- In react, setState doesn't trigger re-rendering immediately. It's scheduled to happen asynchronously. This means the remaining of code will continue executing to completion before any re-rendering occur
  2- After the execution completes, React batches all the state updates together and perform a single re-render
  3- event.target.style.backgroundColor makes the style change immediately before re-rendering. However, this direct manipulation driven by click event creates a disconnect between component actual state and what's visually displayed ==> All UI changes should be the result of state changes rather than direct DOM manipulations. This is a core principle of React's declarative approach
  */
  //  keyboard
  const keyboardEl = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((letter, index) => (
      <Letter
        key={index}
        id={index}
        letter={letter.toUpperCase()}
        onClick={(e) => handleLetterClick(letter, e)}
        isWrong={guessWord.includes(letter)}
        isGuessed={guesses.includes(letter)}
      />
    ));
  return (
    <main>
      <header>
        <h1 className="title">Assembly:Endgame</h1>
        <p className="description">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      {gameOver && (
        <section className="game-status">
          <p>{gameWon ? "You win" : "Farewell "}</p>
        </section>
      )}
      <section className="languages-container">{languagesEl}</section>
      <section className="word-container">{inputWordEl}</section>
      <section className="keyboard">{keyboardEl}</section>
      <button className="main-btn" onClick={generateNewGame}>
        New Game
      </button>
    </main>
  );
}
