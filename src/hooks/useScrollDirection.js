import { useState } from "react"
import useEventListener from "./useEventListener"

const useScrollDirection = () => {

    const [prevScroll, setPrevScroll] = useState(0)
    const [currentScroll, setCurrentScroll] = useState(0)
    const [scrollDirection, setScrollDirection] = useState()

    useEventListener("scroll", () => {
        setCurrentScroll(window.scrollY)

        if (prevScroll < currentScroll) setScrollDirection("down")
        else if (prevScroll > currentScroll) setScrollDirection("up")

        setPrevScroll(currentScroll)
    })

    return scrollDirection
}
 
export default useScrollDirection;