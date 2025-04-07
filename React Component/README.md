# React component
## Badge
## Banner
## Tooltips

# CSS Grid Learning Notes

## Basic Grid Properties

### 1. Grid Container
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  grid-template-rows: auto auto;          /* 2 rows that fit content */
  gap: 20px;                              /* space between grid items */
}
```
```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
```

### 2. Input Type File
```html
<input type="file" accept="image/png, image/jpg">
<input type="file" accept="image/*"> <!-- All image types -->
```
```css
input[type="file"] {
  padding: 10px;
  border: 1px solid #ccc;
}

input[type="file"]::file-selector-button {
  background: #f3f3f3;
  border: 1px solid #ccc;
  padding: 5px 10px;
}
```

## Grid Layout Behavior

### 1. Margins in Grid
- `display: grid` → margins no longer collapse between grid items
- Child margins are contained within the grid cells
```css
/* Margins don't collapse in grid */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.grid-item {
  margin: 20px; /* These margins won't collapse with adjacent items */
}
```

### 2. Column Width Problems
- `grid-template-columns` defined in px can create overflow when screen is narrower
```css
/* Problem: Fixed width can cause overflow */
.problematic {
  display: grid;
  grid-template-columns: 300px 300px 300px; /* Can overflow on small screens */
}

/* Solution: Use fr units */
.solution {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Adapts to container width */
}
```

### 3. Gap Handling
- `row-gap` + `column-gap` → shorthand: `gap: row-gap-px column-gap-px`
- Gaps are not included in column width calculations
- When using percentages: `calc(100% - sum-of-gaps)/number-of-columns`
- Better solution: use `fr` units which account for gaps automatically
```css
/* Complete gap syntax */
.grid {
  display: grid;
  row-gap: 20px;
  column-gap: 10px;
  /* Or shorthand: */
  gap: 20px 10px;
}

/* Percentage width with gap calculation */
.fixed-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: calc((100% - 40px) / 3) calc((100% - 40px) / 3) calc((100% - 40px) / 3);
}

/* Better solution with fr units */
.better-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}
```

### 4. Auto Column Width
- `column-width: auto` → only takes as much space as its content needs
- Useful for navigation bars or sidebars
```css
.sidebar-layout {
  display: grid;
  grid-template-columns: auto 1fr;
}
```
```html
<div class="sidebar-layout">
  <nav>Navigation (only as wide as needed)</nav>
  <main>Main content (takes remaining space)</main>
</div>
```

### 5. Row Behavior
- `grid-template-rows` defines explicit rows
- Grid will auto-generate implicit rows if more are needed
- Implicit rows expand to cover all content by default
- Shorthand: `grid-template: row-width row-width / column-width column-width`
```css
.explicit-rows {
  display: grid;
  grid-template-rows: 100px 200px;
  /* If more than 2 items, implicit rows are created */
}

/* Shorthand for rows and columns */
.shorthand-grid {
  display: grid;
  grid-template: 100px 200px / 1fr 2fr 1fr;
  /* Equivalent to:
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 2fr 1fr; */
}
```

## Grid Item Placement

### 1. Spanning Multiple Columns
```css
.span-item {
  grid-column: span 2; /* Item spans 2 columns */
}
```
```html
<div class="grid">
  <div>Item 1</div>
  <div class="span-item">This spans 2 columns</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

### 2. Explicit Placement
```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.item1 {
  grid-column: 1 / 3; /* Start at line 1, end at line 3 */
}

.item2 {
  grid-column: 3 / span 2; /* Start at line 3, span 2 columns */
}

.full-width {
  grid-column: 1 / -1; /* Span all columns */
}
```

### 3. Named Grid Areas
```css
.layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: 
    "nav nav head head head head head head head head head head"
    "nav nav main main main main main main main aside aside aside"
    "nav nav main main main main main main main aside aside aside"
    "nav nav main main main main main main main aside aside aside"
    ". . foot foot foot foot foot foot foot foot foot foot";
}

.header { grid-area: head; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: foot; }
```
```html
<div class="layout">
  <header class="header">Header</header>
  <nav class="nav">Navigation</nav>
  <main class="main">Main Content</main>
  <aside class="aside">Sidebar</aside>
  <footer class="footer">Footer</footer>
</div>
```
- `.` represents empty cell in grid-template-areas

### 4. Dev Tools
- Grid tool in browser dev tools helps visualize and debug layouts

## Solved Problems and Solutions

### 1. Flexibility in Column Width
- Problem: Fixed pixel widths can cause overflow
- Solution: Avoid using fixed measurements for grid-template-columns
- Use `fr` units or percentage with `calc()` to prevent overflow
```css
/* Problem: Fixed widths can cause overflow */
.problematic {
  display: grid;
  grid-template-columns: 300px 300px 300px;
}

/* Solution: Use fr units */
.flexible {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

### 2. Keyboard Navigation
- Problem: CSS Grid visual layout can differ from HTML source order, breaking keyboard navigation
- Solution: Keep display order same as HTML order when possible
- Always test keyboard experience for smoothness and logical flow
- Think about accessibility when reordering grid items
```css
/* Avoid this when accessibility is important */
.bad-for-keyboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.item1 { grid-area: 2 / 1; } /* Visually comes after item2 */
.item2 { grid-area: 1 / 1; } /* but in HTML comes before item1 */

/* Better approach: keep visual order close to HTML order */
```

### 3. Responsive Elements with Fixed Width
- Problem: Elements get too narrow or stretched as screen size changes
- We want to make layout responsive without media queries
- We don't know how many rows we'll have

### 4. Handling Auto-Generated Rows
- `grid-auto-rows: 75px` applies height to implicitly generated rows
- Want rows to flex depending on browser width
- Goal: narrow screen: 4-5 items per row, medium: 6-7, wide: 8-9
```css
/* Problem: Fixed number of columns isn't responsive */
.fixed-columns {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 75px;
}

/* Solution: Auto-fitting columns */
.auto-fit-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-auto-rows: 75px;
}
```

### 5. Auto-Fitting Columns
```css
grid-template-columns: repeat(auto-fit, 100px);
```
- Instead of fixed number: `repeat(5, 1fr)`
- Problem: Fixed size can leave white space when not enough items to fill row

### 6. Dense Packing
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-auto-flow: dense; /* Fills in gaps with smaller items */
  gap: 10px;
}
```
- Packs grid items as densely as possible
- Ignores HTML order
- Problem: Still get white gap on the right side

### 7. Solution: Minmax for Responsive Elements
- Logic for why we need `minmax()`: 
  1. Fixed widths (100px) cause white space
  2. Percentage widths can make items too narrow/wide
  3. We need items with minimum width that can also stretch
```css
/* The complete responsive grid solution */
.responsive-gallery {
  display: grid;
  /* Logic: We need minimum size but also want items to stretch */
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
}
```
- This defines a size range: minimum 100px, maximum 1fr
- Creates truly responsive grid without media queries

## Mobile Layout Approaches

### 1. Simple Mobile Stack
```css
.mobile-stack {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .mobile-stack {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### 2. Responsive Without Media Queries
```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
```
```html
<div class="responsive-grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```
- Auto-stacks to single column when viewport < 280px
- Adds columns as space allows

### 3. Auto-Fill vs Auto-Fit
```css
.auto-fill-example {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  /* Creates empty tracks even when not needed */
}

.auto-fit-example {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  /* Only creates needed tracks and expands them */
}
```
- `auto-fill`: Creates as many tracks as possible, including empty ones
- `auto-fit`: Creates only necessary tracks and expands items to fill container
- Use `auto-fit` when you want items to stretch and fill available space
- Use `auto-fill` when you want consistent sizing with potential empty tracks

### 4. Handling Tooltip Organization
```css
.section-tooltip {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.tooltip.bold {
  grid-column: 1;
}

.tooltip.light {
  grid-column: 2;
}

/* Problem: Light tooltips starting from 4th row */
/* Solution: Change grid auto flow direction */
.section-tooltip {
  grid-auto-flow: column; /* Fill columns first instead of rows */
}
```
```html
<div class="section-tooltip">
  <!-- If all bold tooltips come first in HTML, they'll fill column 1 -->
  <div class="tooltip bold">Bold Tooltip 1</div>
  <div class="tooltip bold">Bold Tooltip 2</div>
  <div class="tooltip bold">Bold Tooltip 3</div>
  <div class="tooltip bold">Bold Tooltip 4</div>
  <!-- Then light tooltips will start filling column 2 from row 1 -->
  <div class="tooltip light">Light Tooltip 1</div>
  <div class="tooltip light">Light Tooltip 2</div>
  <div class="tooltip light">Light Tooltip 3</div>
  <div class="tooltip light">Light Tooltip 4</div>
</div>
```
- Problem: Light tooltips starting from 4th row instead of 1st
- Cause: Grid fills rows first by default, and HTML likely has all bold tooltips before light ones
- Solution: Use `grid-auto-flow: column` to fill columns first

### 5. Shadow Fix for Tooltips with Polygon
```css
.tooltip {
  display: flex;
  width: 384px;
  border-radius: 8px;
  padding: 16px;
  gap: 16px;
  line-height: 1.5;
  position: relative;
  margin-bottom: 2em;
  /* Remove direct box-shadow */
  box-shadow: none;
}

.tooltip::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  z-index: -2;
}

.tooltip * {
  background-color: inherit;
}

div.polygon {
  width: 34px;
  height: 34px;
  transform: rotate(45deg) translateY(-55%) translateX(-35%);
  position: absolute;
  top: 100%;
  z-index: -1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
```
- Problem: Tooltip shadow covers polygon shadow due to stacking context
- Solution: Move tooltip shadow to pseudo-element with lower z-index than polygon