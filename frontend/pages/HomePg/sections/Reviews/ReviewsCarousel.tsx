import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import reviews from '../../../../data/reviews.json'
import Review from './Review'


const ReviewsCarousel = () => {
    const [index, setIndex] = useState(0);
    const { reviewer, review } = reviews[index];

    return (
        <section className='row ps-5 pe-5 mt-5 pb-5'>
            <div className="slider">
                <a href="#slide-1" className='text-decoration-none'></a>
                <a href="#slide-2" className='text-decoration-none'>2</a>
                <a href="#slide-3" className='text-decoration-none'>3</a>
                <a href="#slide-4" className='text-decoration-none'>4</a>
                <a href="#slide-5" className='text-decoration-none'>5</a>
                <section className="d-flex justify-content-center align-items-center">
                    <div className="slides d-flex">
                        <div id="slide-1">
                            1
                        </div>
                        <div id="slide-2">
                            2
                        </div>
                        <div id="slide-3">
                            3
                        </div>
                        <div id="slide-4">
                            4
                        </div>
                        <div id="slide-5">
                            5
                        </div>
                    </div>
                </section>
            </div>
        
        </section>
    )

}

export default ReviewsCarousel;