import useMediaQuery from "./useMediaQuery";

const useSpacing = () => {
    
    const mq = useMediaQuery()
    
    const spacing = {
        xxs: "0.2rem",
        xs: "0.5rem",
        s: "1rem",
        m: "1.5rem",
        l: "2rem",
        xl: "2.5rem",
        xxl: "5rem",
        contentWidth: "1200px",
        textWidth: "700px",
        wrapping: mq(["1rem", "2rem"]),
        gutter: "3rem"
    }

    return spacing
}
 
export default useSpacing;