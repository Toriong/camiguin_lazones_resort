import { useLayoutEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid";


function HiAnimations(){
    const HI_TEXTS = ["Hello", "Kumusta", "你好", "Здравствуй", "안녕", "こんにちは"];
    const [currentHiTxtIndex, setCurrentHiTxtIndex] = useState(0);
    const txtKey = uuidv4()

    useLayoutEffect(() => {
        let intervalTimer = setInterval(() => {
            if (currentHiTxtIndex === 2) {
                setCurrentHiTxtIndex(0);
            } else {
                setCurrentHiTxtIndex(currentHiTxtIndex + 1);
            }
        }, 4000);

        return () => { clearInterval(intervalTimer); }
    }, [currentHiTxtIndex]);

    return <h3 key={txtKey} className="top-0 start-0 position-absolute mt-2 me-5 text-white hiTxt flickerFaster display-6 largerFontSize heavyFontWeight">{HI_TEXTS[currentHiTxtIndex]}<span>👋</span>!</h3>
}

export default HiAnimations