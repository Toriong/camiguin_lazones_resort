export interface introPic{
    isOnUI: Boolean
    path: String,
    picTxts: String[],
    infoTxt: String
}

interface ReviewObj {
    reviewer: string,
    review: string
}

export interface CarouselProps {
    reviews: ReviewObj[]
}
