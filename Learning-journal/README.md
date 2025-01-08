# Learning Journal Blog

A responsive, multi-page blog website showcasing my learning journey as a bootcamp student. The project demonstrates modern CSS techniques and responsive design principles.

## Project Overview

The website consists of three main pages:
- Home page with featured articles
- Individual blog post page
- About me page

View design: [Figma Design](https://www.figma.com/design/hE5klIn1AEQ9XWZWmurs7y/Learning-Journal%2FBlog?node-id=1-432&t=cQnm8FYLila3Q059-0)

## Technical Implementation

### HTML Structure
- Semantic HTML5 elements:
  - `<header>` for site navigation
  - `<main>` for primary content
  - `<article>` for blog posts
  - `<footer>` for site information
- Proper attribute usage:
  - `aria-label` for accessibility
  - `alt` text for images

  ### CSS Features

#### Image Handling
```css
.hero img {
    height: 32.6vh;
    object-fit: cover;
    object-position: 0% 100%;
    transform: rotateY(180deg);
}
```
- Image transformation techniques
- Object fitting and positioning
- Responsive image scaling
- Background image blending

#### Grid Layout
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
        "one"
        "two"
        "three";
}
```
- Responsive grid system
- Named grid areas
- Auto-fit for dynamic layouts

#### Typography
```css
* {
    box-sizing: border-box;
    font-size: 11.2px;
}
```
- Responsive font sizing using:
  - `rem` for scalable text
  - `em` for relative spacing
  - `vw/vh` for viewport-based sizing
  - Percentage for flexible layouts

#### Responsive Design
```css
@media(min-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(auto-fit, minmax(309px, 1fr));
    }
}
```
- Mobile-first approach
- Breakpoint at 768px
- Flexible grid adjustments
- Responsive image handling

### Interactive Elements

#### Hover Effects
```css
.hero article:hover .overlay-text {
    height: auto;
}
```
- Text overlay animations
- Color transitions
- Interactive navigation
## Responsive Breakpoints

- Mobile: < 768px
  - Single column layout
  - Stacked navigation
  - Adjusted typography

- Desktop: ≥ 768px
  - Multi-column grid
  - Expanded navigation
  - Enhanced hover effects
  ## Future Enhancements

- [ ] Add dark mode
- [ ] Implement search functionality
- [ ] Add pagination for articles
- [ ] Enhance animation effects 
## Learning Outcomes

1. Advanced CSS Techniques:
   - Transform properties
   - Object-fit handling
   - Grid layouts
   - Media queries

2. Responsive Design:
   - Mobile-first approach
   - Flexible layouts
   - Responsive typography
   - Image optimization

3. Best Practices:
   - Semantic HTML
   - Accessibility
   - Clean code structure
   - CSS organization

