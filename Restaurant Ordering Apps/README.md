# Restaurant Ordering App

Design:
 https://www.figma.com/design/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?node-id=8-237&t=7QRjVp60tMpU2u4Z-0

## Description
A restaurant ordering web application where users can browse menu items, add/remove items to their order, see real-time order updates, and complete their purchase through a payment modal.

## Core Functionalities
* View restaurant menu
* Add/remove items from order
* Real-time order total calculation
* Payment processing
* Order confirmation

## Features
* Dynamic Menu Rendering:  Automatically generates menu items from a JavaScript data array. Menu items display with emoji, name, ingredients, and price with interactive add buttons for each item.

* Order managing: 
    - Real-time order updates with add/remove functionality
    -  Shows/hides order summary based on item presence
    - Automatically calculates and updates total order price when adding/removing items
    - Display message with user's name after successful order completion
* Modal Payment Form : Appears when "Complete order" is clicked, and closes when clicking outside or after successful payment

## Technologies Used
* HTML5
* CSS3
* JavaScript (ES6+)
* Google Fonts API
* Figma

## Technical Implementation

### HTML
#### Semantic Elements && Accessibility
* Semantic HTML tags for better screen reader support:  `<header>`, `<main>`
* `<form>` for payment modal, `aria-label` attributes for form inputs, `required` attribute for form validation
* `<img>` with `alt` text for banner image

### CSS
#### Layout Properties
* `display: flex` for component alignment
* `position: fixed` for modal positioning and applied centering technique for a fixed element with margin auto & top,right,bottom,left are set to 0
* `box-sizing: border-box` for box model control and placeholder text position for input elements --> padding is added but width of element unchanged
#### Styling Properties
* `box-shadow` for modal overlay
* `:hover` states for buttons
* `opacity` for visual effects

### JavaScript
#### DOM Methods
* `classList.add/remove()` for toggling classes
* central `addEventListener()` for multiple event handlings

#### Event Handling
* used `event.target.closest('.class-name')` to hide the modal when mouse click is outside the modal container 
* Event object `target` property with data attributes (`dataset`) to target a specific element

#### Array Methods
* `filter()` for removing items
* `reduce()` for total calculation
* `push()` for adding items
* `forEach()` for iteration over each element and dynamically generate html string

#### Form Handling
* `FormData` API for form processing and `.get(name_of_input_element)` to extract name data from a specific input; display user's name in the message after order is paid
* `preventDefault()` for form submission

## Learning Outcomes:

* Building interactive web applications
* Managing application state
* Handling user interactions
* Form processing and validation
* Modal implementation
* Dynamic content rendering
* CSS layout and styling
* Event delegation patterns