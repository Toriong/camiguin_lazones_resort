import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import reviews from '../../../../data/reviews.json'
import Review from './Review'


const ReviewsCarousel = () => {
    const [index, setIndex] = useState(0);
    const { reviewer, review } = reviews[index];



    // useEffect(() => {
    //     let intervalTimer = setInterval(() => {
    //         if (index === 2) {
    //             setIndex(0);
    //         } else {
    //             setIndex(index + 1);
    //         }
    //     }, 4000);
    //     return () => { clearInterval(intervalTimer); }
    // }, [index]);

    return (
        <section className='row ps-5 pe-5 mt-5 pb-5'>
            <section className="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">
                    <li id="carousel__slide1"
                        tabIndex={0}
                        className="carousel__slide">
                        <div className="carousel__snapper">
                            <a href="#carousel__slide4"
                                className="carousel__prev">Go to last slide</a>
                            <a href="#carousel__slide2"
                                className="carousel__next">Go to next slide</a>
                        </div>
                    </li>
                    <li id="carousel__slide2"
                        tabIndex={0}
                        className="carousel__slide">
                        <div className="carousel__snapper"></div>
                        <a href="#carousel__slide1"
                            className="carousel__prev">Go to previous slide</a>
                        <a href="#carousel__slide3"
                            className="carousel__next">Go to next slide</a>
                    </li>
                    <li id="carousel__slide3"
                        tabIndex={0}
                        className="carousel__slide">
                        <div className="carousel__snapper"></div>
                        <a href="#carousel__slide2"
                            className="carousel__prev">Go to previous slide</a>
                        <a href="#carousel__slide4"
                            className="carousel__next">Go to next slide</a>
                    </li>
                    <li id="carousel__slide4"
                        tabIndex={0}
                        className="carousel__slide">
                        <div className="carousel__snapper"></div>
                        <a href="#carousel__slide3"
                            className="carousel__prev">Go to previous slide</a>
                        <a href="#carousel__slide1"
                            className="carousel__next">Go to first slide</a>
                    </li>
                </ol>
                <aside className="carousel__navigation">
                    <ol className="carousel__navigation-list">
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide1"
                                className="carousel__navigation-button">Go to slide 1</a>
                        </li>
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide2"
                                className="carousel__navigation-button">Go to slide 2</a>
                        </li>
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide3"
                                className="carousel__navigation-button">Go to slide 3</a>
                        </li>
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide4"
                                className="carousel__navigation-button">Go to slide 4</a>
                        </li>
                    </ol>
                </aside>
            </section>
        </section>
    )

}

export default ReviewsCarousel;