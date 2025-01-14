const emojis = ['🎄', '🎁', '🎅', '☃️']; // Your set of emojis

/**
 *🎄 Requirements:
 * - This is a classic "Find the Pair" game with a christmas theme.
 * - The player should be able to reveal cards by clicking on them.
 * - When the player reveals one card, it should stay revealed until a second card is revealed.
 * - When the player reveals two cards:
 *   - If they are the same, they should remain revealed for the rest of the game.
 *   - If they are different, they should be flipped back to hidden.
 * - The cards should be shuffled at the start of each game.
 */
// get HTML elements
let matchedCards = 0
let firstCardIndex
let secondCardIndex
 let allCards
const gameBoardEl = document.getElementById("game-board");
//function to shuffle cards
function shuffleCards(emojis){
    for( let i=0;i<emojis.length;i++){
        let randomIndex = Math.floor(Math.random()*emojis.length)
        let exchange = emojis[i]
        emojis[i] = emojis[randomIndex]
        emojis[randomIndex] = exchange        
    }
    return emojis
 }

//function to generate cards
function generateCards(emojis){
    //shuffle cards
    let firstShuffle = shuffleCards([...emojis])
    let secondShuffle = shuffleCards([...emojis])
    allCards = firstShuffle.concat(secondShuffle)
    shuffleCards(allCards)
    // lay out cards
   for (let i =0;i<allCards.length;i++){
    gameBoardEl.innerHTML += `<button class='card' id='${i}'  onClick='revealCard(${i},${JSON.stringify(allCards)})'> ? </button>`
    }   
    // document.getElementById('restart-btn').outerHTML = '<button id="restart-btn">Restart Game Style</button>'
}

function revealCard(i, allCards) {
    // First card selection
    if (matchedCards == 0) {
        firstCardIndex = i;
        document.getElementById(firstCardIndex).textContent = allCards[firstCardIndex]; // Reveal first card
        matchedCards++;
    } 
    // Second card selection
    else if (matchedCards == 1) {
        secondCardIndex = i;
        document.getElementById(secondCardIndex).textContent = allCards[secondCardIndex]; // Reveal second card
        matchedCards++;

        // Check if the two revealed cards match
        if (allCards[firstCardIndex] === allCards[secondCardIndex]) {
            // Cards match: keep them revealed and reset for next pair
            matchedCards = 0;
        } else {
            // Cards don't match: hide them after 1 second
            setTimeout(function() {
                document.getElementById(firstCardIndex).textContent = '?';
                document.getElementById(secondCardIndex).textContent = '?';
                matchedCards = 0; // Reset for next attempt
            }, 1000);
        }
    } 
    // Prevent further card selection while two unmatched cards are displayed
    else {
        return;
    }
    
    //check if all cards are revealed
    let allCardEl = Array.from(document.getElementsByClassName('card'))
    let gameIsContinue = allCardEl.map(el => el.textContent.trim()).includes('?')
    if(!gameIsContinue){  
        document.getElementById("restart-btn").style.display = 'block'
    }
    
}



/**
 * 🎅 Stretch Goals:
 * - Add a point system where points are awarded for each correctly revealed pair 
 *   and deducted for each incorrect pair (you decide the exact points for each action).
 * - Implement a high-score system using the browser's local storage.
 * - Add a "Restart Game" button that appears when the game ends so the user can start over.
 */

const restartBtn = document.getElementById("restart-btn")
restartBtn.addEventListener("click", function(){
    gameBoardEl.innerHTML=""
    generateCards(emojis)
    restartBtn.style.display='none'
})
 generateCards(emojis)
