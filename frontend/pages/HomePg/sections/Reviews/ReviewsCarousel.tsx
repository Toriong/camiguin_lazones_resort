import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import reviews from '../../../../data/reviews.json'
import Review from './Review'


const ReviewsCarousel = () => {
    const [index, setIndex] = useState(0);
    const { reviewer, review } = reviews[index];



    useEffect(() => {
        let intervalTimer = setInterval(() => {
            if (index === 2) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 4000);
        return () => { clearInterval(intervalTimer); }
    }, [index]);

    return (
        <section className='row ps-5 pe-5 mt-5 pb-5'>
            <div className='col-12 homePgInfoSec shadow'>
                <Review reviewer={reviewer} review={review} />
            </div>
        </section>
    )

}

export default ReviewsCarousel;