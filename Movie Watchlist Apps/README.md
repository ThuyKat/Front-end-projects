# Movie Watchlist App

A dynamic web application for movie enthusiasts to search, save, and manage their favorite films.

## Features

- **Search Page (index.html)**: 
  - Search bar for movie queries
  - Real-time results fetched from OMDB API
  - Add movies to watchlist with a single click

- **Watchlist Page (watchlist.html)**:
  - Display saved movies from local storage
  - Manage your personal movie collection

## Technical Implementation

### JavaScript
- Asynchronous API calls using `fetch` and `async/await`
- Dynamic content rendering based on search results
- Error handling for API requests and data loading states
- Local storage management for persistent watchlist data

### CSS
- Advanced styling techniques:
  - `mix-blend-mode` for unique visual effects
  - Pseudo-elements for layered backgrounds
  - Stacking context manipulation using `position: relative` and `z-index`

## How It Works

1. **Search Functionality**: 
   - Enter keywords in the search bar
   - App fetches matching movies from OMDB API
   - Results displayed with options to add to watchlist

2. **Watchlist Management**:
   - Add movies to watchlist from search results
   - Data saved to browser's local storage
   - Watchlist page retrieves and displays saved movies

## Key Learnings

- API integration and asynchronous JavaScript
- Local storage for client-side data persistence
- Advanced CSS techniques for modern UI design

---


