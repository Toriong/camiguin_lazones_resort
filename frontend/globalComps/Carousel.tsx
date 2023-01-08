/* eslint-disable react/no-unescaped-entities */
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BsCircleFill, BsCircle, BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs'
import { CarouselProps } from 'globalInterfaces/interfaces'
import { useEffect, useRef, useState } from 'react';



function Carousel({ reviews }: CarouselProps) {
    const [index, setIndex] = useState(0);
    const [isCarouselPaused, setIsCarouselPaused] = useState(false)
    const BULL_POINT_INDEX_NUMS = reviews.map((_, index) => index);
    const timeoutRef = useRef<null| ReturnType<typeof setTimeout> >(null);

    function handleNavBtnClick(num: number) {
        setIsCarouselPaused(true)
        setIndex(prevIndex => {
            const wasBackBtnPressed = -1 === Math.sign(num);

            if ((prevIndex === 0) && wasBackBtnPressed) return reviews.length - 1;

            if ((prevIndex === (reviews.length - 1)) && wasBackBtnPressed) return (prevIndex + num);

            return (prevIndex === (reviews.length - 1)) ? 0 : (prevIndex + num);
        })
    }

    function handlePausePlayBtnClick() {
        setIsCarouselPaused(isCarouselPaused => !isCarouselPaused)
    }

    function handleBulletPtClick(num: number) {
        setIndex(num);
    }

    function resetTimeout(){
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }


    useEffect(() => {
        if (!isCarouselPaused) {
            resetTimeout();
            const targetArr = reviews;
            timeoutRef.current = setTimeout(
                () =>
                    setIndex(prevIndex => {
                        return (prevIndex === (targetArr.length - 1)) ? 0 : prevIndex + 1;
                    }),
                4000
            );

            return () => {
                resetTimeout();
            };
        }
    }, [index, isCarouselPaused]);

    return (
        <>
            <section className="position-absolute h-100 start-0 d-flex justify-content-center align-items-center pe-3">
                <button className="noBtnStyles pb-3 moveLeft noColorChangeOnClick btnColorChangeOnHover" onClick={() => { handleNavBtnClick(-1) }}>
                    <IoIosArrowBack className="text-muted arrowNavigationCarousel backBtnCarousel op-5" />
                </button>
            </section>
            <section className="position-absolute h-100 end-0 d-flex justify-content-center align-items-center">
                <button className="noBtnStyles pb-3 moveRight noColorChangeOnClick btnColorChangeOnHover" onClick={() => { handleNavBtnClick(1) }}>
                    <IoIosArrowForward className="text-muted arrowNavigationCarousel forwardBtnCarousel op-5" />
                </button>
            </section>
            <div className="autoCarouselContainer">
                <div className="autoCarouselSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {reviews && reviews.map((review, index) => {
                        const { review: _review, reviewer } = review;
                        return (
                            <div className="autoCarouselItem position-relative" key={index}>
                                <section className="w-100 h-100 d-flex flex-column flex-sm-row justify-content-center align-items-center feedBackSec">
                                    <section className="pb-sm-5 mb-sm-5">
                                        <span className="text-dark fst-italic text-center text-sm-start feedbackTxt">
                                            "{_review}"
                                        </span>
                                    </section>
                                    <section className="d-flex justify-content-center align-items-center align-items-sm-stretch justify-content-sm-end mt-3 mt-sm-0 reviewerSec">
                                        <section className='flex-column d-flex justify-content-center justify-content-sm-start align-items-center align-items-sm-stretch'>
                                            <span className="text-wrap text-center text-sm-start text-dark reviewerTxt fst-italic">- {reviewer}</span>
                                        </section>
                                    </section>
                                </section>
                            </div>
                        )
                    })}
                </div>
                <section className='d-flex flex-column justify-content-center align-items-center pb-1 mt-sm-0'>
                    <section className="w-100 d-flex justify-content-center align-items-center">
                        {BULL_POINT_INDEX_NUMS.map((num, index) => (
                            (num === index) ? <BsCircleFill className="text-dark ms-1" key={index} /> : <BsCircle key={index} className="text-dark ms-1" onClick={() => { handleBulletPtClick(num) }} />
                        ))}
                    </section>
                    <section className="d-flex justify-content-center align-items-center mt-3">
                        <button className="noBtnStyles" onClick={handlePausePlayBtnClick}>
                            {isCarouselPaused ? <BsFillPlayCircleFill className="fs-larger" /> : <BsFillPauseCircleFill className="fs-larger" />}
                        </button>
                    </section>
                </section>
            </div>
        </>
    )
}

export default Carousel;
