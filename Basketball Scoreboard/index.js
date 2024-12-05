let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function incrementHome(number) {
  homeScore += number;
  homeScoreEl.textContent = homeScore;
  console.log("increase Home's score by", number);
}

function incrementGuest(number) {
  guestScore += number;
  guestScoreEl.textContent = guestScore;
  console.log("increase Guest's score by", number);
}

function resetScore() {
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
  homeScore = 0;
  guestScore = 0;
}

// add "New Game" button
// Highlight the leader
// add counters ( period, fouls, timer)
// change the design
