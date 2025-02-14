import Dice from "./components/Dice"
import { useState, useRef,useEffect, use } from "react"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
export default function App(){

    const [dices,setDices] = useState(() => generateAllNewDice())
    const { width, height } = useWindowSize()
     //game won when all dice has same value and all are held
     const gameWon  = dices.every(dice => dice.isHeld) && dices.every(dice => dice.value===dices[0].value)
    const focusBtn = useRef(null)
    function generateAllNewDice(){
        return new Array(10).fill(0).map(el => 
            ({value: Math.ceil(Math.random()*6),
             id:nanoid(),
             isHeld:false
            })
        ) 
    }
    function rollDice(){
        if(!gameWon){
            setDices(prevDices => prevDices.map(
                dice => dice.isHeld ? dice : {...dice,value:Math.ceil(Math.random()*6)}
            ))
        }else{
            setDices(generateAllNewDice())
        }
       
    }
    function changeIsHeld(diceId){
        const newDices = dices.map(dice => dice.id===diceId?{...dice,isHeld:!dice.isHeld}:dice)
        setDices(newDices)
    }
    useEffect(()=>{
        focusBtn.current.focus()
    },[gameWon])
   
    const diceElements = dices.map(dice => <Dice 
        key={dice.id}
        value={dice.value}
        isHeld={dice.isHeld}
        onClick={()=>changeIsHeld(dice.id)}
        />)
    return (
        <main>
            {gameWon&& <Confetti
            width={width}
            height={height}
            />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
           <div className="dice-container">
                {diceElements}
           </div>
           <button ref={focusBtn} className="roll-btn" onClick= {rollDice}>{gameWon? "New Game" :"Roll dice"}</button>
        </main>
    )
}
