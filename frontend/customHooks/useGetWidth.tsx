import { useEffect, useState } from "react";

interface ReturnVal{
    widthPx: number;
}



function useGetViewPortWidth():ReturnVal{
    const [widthPixels, setWidthPixels] = useState(0);

    const handleViewPortResize = () => {
        const innerWidth = window.innerWidth;
        setWidthPixels(innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleViewPortResize);
        const innerWidth = window.innerWidth;
        console.log("innerWidth: " + innerWidth);
        setWidthPixels(innerWidth);
    }, [window.innerWidth]);

    return { widthPx: widthPixels };
}

export default useGetViewPortWidth;