import { RefObject, useEffect, useRef, useState } from "react"



function useOnScreen(ref:RefObject<HTMLElement>){
    const [isIntersecting, setIntersecting] = useState(false)

  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
      )

      ref.current && observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [])
  
    return isIntersecting
  }
  

  export default useOnScreen;