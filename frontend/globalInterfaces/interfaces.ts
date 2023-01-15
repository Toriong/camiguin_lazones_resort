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

export interface Dates {
    startDate: string
    endDate: string
}

export interface GuestsNum{
    adultsNum: number
    childrenNum: number
}

export interface Trip extends Dates, GuestsNum{}

export interface ReduxStore extends Dates, GuestsNum{}
