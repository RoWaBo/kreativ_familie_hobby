import useWindowSize from "../hooks/useWindowSize";
import breakPoints from "../style/breakPoints";

const useMediaQuery = () => {
    
    const { width } = useWindowSize()

    const mq = array => {
        const isMobileView = width < breakPoints.mobile
        const isTabletView = width > breakPoints.mobile && width < breakPoints.tablet
        const isDesktopView = width > breakPoints.tablet

        if (array.length === 2) {
            return isMobileView ? array[0] : array[1]
        }
        else if (array.length === 3) {
            if (isMobileView) return array[0]
            if (isTabletView) return array[1]    
            if (isDesktopView) return array[2]    
        }
        else {
            console.error("The mq functionen takes minimum 2 items and max 3 items in the arguments array")
        }

    }
    
    return mq
}
 
export default useMediaQuery;