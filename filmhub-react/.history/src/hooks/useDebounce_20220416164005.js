
import {useCallback, useEffect, useRef} from "react";

export default function useDebounce(callback, delay) {
    const timer = useRef();

    const debouncedCallback = useEffect((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [delay])

    return debouncedCallback;
};