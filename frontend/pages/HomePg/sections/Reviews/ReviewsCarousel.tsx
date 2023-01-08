/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import Review from './Review'
import Card from 'react-bootstrap/Card'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BsCircleFill, BsCircle, BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs'
import Carousel from 'globalComps/Carousel';

const { Body, Header } = Card;
interface ReviewObj {
    reviewer: string,
    review: string
}

interface Props {
    reviews: ReviewObj[]
}


function ReviewsCarousel({ reviews }: Props) {
    const [index, setIndex] = useState(0);
    const [isCarouselPaused, setIsCarouselPaused] = useState(false)
    const BULL_POINT_INDEX_NUMS = reviews.map((_, index) => index);

    function handleNavBtnClick(num: number) {
        setIsCarouselPaused(true)
        setIndex(prevIndex => {
            const wasBackBtnPressed = -1 === Math.sign(num);

            if ((prevIndex === 0) && wasBackBtnPressed) return reviews.length - 1;

            if ((prevIndex === (reviews.length - 1)) && wasBackBtnPressed) return (prevIndex + num);

            return (prevIndex === (reviews.length - 1)) ? 0 : (prevIndex + num);
        })
    }

    function handlePausePlayBtnClick(){
        setIsCarouselPaused(isCarouselPaused => !isCarouselPaused)
    }

    function handleBulletPtClick(num: number){
        setIndex(num);
    }

    return (
        <Card className='homePgCardColor reviewsCard shadow border-0'>
            <Header className="d-flex justify-content-center align-items-center bg-transparent border-0">
                <h2 className="fwt-800 fs-larger">Google/Facebook Reviews</h2>
            </Header>
            <Body className="position-relative reviewsCardBody">
                <Carousel reviews={reviews}/>
            </Body>
        </Card>
    )

}

export default ReviewsCarousel;