import { FC } from "react"

interface IntroPicProps{
    path: string
}

const IntroPic:FC<IntroPicProps>= ({ path }) => {
    return <img src={path} alt="camiguin_lazones_resort_introPic" className='w-100 h-100 fade' />
}

export default IntroPic;