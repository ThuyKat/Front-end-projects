import React from "react"
import useEffectOnUpdate from "./useEffectOnUpdate"
/**
 * Challenge:
 * 1. Pass a second parameter called `onToggle` to useToggle.
 *    Give it a "noop" function `() => {}` as a default.
 * 2. Think: how can we call this `onToggle` function any time
 *    `on` changes, but NOT on the first render? 🤔
 * 3. Modify Menu.js to pass in the correct 2nd parameter.
 */
export default function useToggle(initialValue = false, onToggle=()=>{}) {
    const [on, setOn] = React.useState(initialValue)
    useEffectOnUpdate(onToggle,[on])
    function toggle() {
        setOn(prevOn => !prevOn)
    }
    //separate toggle function makes code readable, consumers dont need to bother with previous state
    return [on, toggle]
}