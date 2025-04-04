This document is to discuss about useRef direct DOM manipulation and make the code more React-like with useEffect

Example: Play-pause the video
```jsx
import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

```
***COMMENT***
1. The flow of above code: 
    - handleClick runs when the button is clicked
    - nextIsPlaying is calculated based on the current value of isPlaying
    - setIsPlaying(nextIsPlaying) is called, but the state update is scheduled (not applied immediately)
    - The if/else block runs, using the nextIsPlaying value to either play or pause the video
    - Later, React processes the state update and re-renders the component with the new isPlaying value
2. The video plays because ref.current.play() is a direct DOM manipulation that happens immediately, independent of React's rendering cycle.
This is precisely why refs are used here - they provide a way to access and manipulate DOM elements directly when you need to work with imperative APIs that can't be controlled through React's declarative props system.
3. However, the flow is not really React-like: we can change to make the UI updated or if/else statement runs after the state has changed

```jsx
import { useState, useRef, useEffect } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  
  // Handle state changes declaratively
  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying]);
  
  function handleClick() {
    setIsPlaying(!isPlaying);
  }
  
  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
```
***COMMENT***
1. If we remove useEffect here, if/else will run during every render, the play() and pause() will be triggered on every render, not just when isPlaying changes. And also, we need to cover the case where useRef value is null. 

This is actually why we need either:

- The original approach (imperative actions in event handlers)
- The useEffect approach (declarative actions in response to state changes)

Without one of these patterns, you'd either:

- Have inconsistent behavior if ref.current is null on first render
- Trigger unnecessary play/pause calls on renders caused by unrelated state changes
- Create potential infinite render loops
2. state change --> re-render the component and update the DOM --> useEffect runs
    This order is why useEffect is well-suited for side effects that should happen after the DOM has been updated - like playing/pausing a video after the UI has been updated to show the correct button label

    This is different from the older class component lifecycle methods like componentDidUpdate, because with useEffect, React guarantees that the DOM has been updated before your effect runs. This is also why it's called "effect" - it's for code that needs to run as an effect of rendering, not during rendering.
3. If you need to run code before the DOM is updated, React provides **useLayoutEffect**, which runs after render but before the browser paints the changes to the screen. However, this is needed much less frequently than useEffect

3. Summary the use of useRef:
- direct DOM manipulation, usually going with useEffect
- since its value is static/immutable on every re-render, we can use it as a condition for if statement, or like a controller of an effect. This is why it is different from normal local variable. Regular local variables are recreated from scratch withit their inital values. useRef is perfect for maintaining references to DOM elements, it's like an anchor pointing to the same DOM node. 
