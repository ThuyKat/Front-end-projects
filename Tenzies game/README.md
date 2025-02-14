# Tenzies Game

A fun and interactive dice game built with React where players roll dice to match values. Roll the dice, hold the ones you want to keep, and aim to get all dice showing the same value to win!

## 🎮 Game Features
- Roll up to 10 dice simultaneously
- Hold individual dice between rolls by clicking them
- Only un-held dice will roll when clicking "Roll"
- Win by getting all dice to show the same value
- Celebration confetti animation when winning
- Option to start a new game after winning

## ⚛️ React Features Used
- Functional components and hooks (useState)
- Event handling for dice clicks and rolls
- Conditional rendering for game state
- Array mapping for dynamic dice generation
- Props for component communication
- Custom window size hook (react-use)
- React-confetti for win animation
- useRef and useEffect to access DOM nodes which allows focusing on button to start new game once game won

## 🎨 CSS Features
- Grid layout for dice arrangement 
- Style the dice to look like the real dice with pips instead of numbers using grid template areas
- Flexbox for responsive centering
- Interactive hover and click states
- Responsive design
- Conditional styling for held dices

## 📚 Dependencies
- React
- nanoid (for unique IDs)
- react-confetti
- react-use

## 🛠️ Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build