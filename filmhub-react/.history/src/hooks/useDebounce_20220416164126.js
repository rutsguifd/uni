
import {useCallback, useEffect, useRef} from "react";

export default function useDebounce(callback, delay, sq) {
    const timer = useRef();

    const debouncedCallback = useEffect((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [sq])

    return debouncedCallback;
};