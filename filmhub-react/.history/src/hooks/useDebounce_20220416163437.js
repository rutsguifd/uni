import { useCallback, useRef } from "react";

export default function useDebounce(callback, delay) {
    const timer = useRef();
    const debouncedCallback = useCallback((t)=> {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(()=> {
            callback(t)
        }, delay)
        
    }, [callback, delay])
    return debouncedCallback;
}