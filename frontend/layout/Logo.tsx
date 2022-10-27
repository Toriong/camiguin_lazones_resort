import Image from "next/image"
import { FC } from "react";

interface ImageLengths{
    width: number,
    height: number
}

const Logo:FC<ImageLengths> = ({width, height}) => {
    return <Image src="/imgs/logo.png" alt="camiguin_lazones_resort_logo" width={width} height={height} layout="fixed" className="rounded-circle border" />
}


export default Logo;