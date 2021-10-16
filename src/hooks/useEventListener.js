import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

const useEventListener = (eventType, callback, element = window) => {

    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])


    useEffect(() => {
        const handler = e => callbackRef.current(e)
        element.addEventListener(eventType, handler)

        return () => element.removeEventListener(eventType, handler)
    }, [eventType, element])

}

useEventListener.propTypes = {
    eventType: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}
 
export default useEventListener;