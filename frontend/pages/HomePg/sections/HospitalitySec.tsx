import Image from "next/image"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Parallax } from 'react-parallax';
import HospitalityPicSec from '../../../public/imgs/outsideBack.jpeg'


const HospitalitySec = () => {
    

    return (
        <section className='row noMargin noPadding flex-nowrap hospitalitySec'>
            <Parallax bgImage={HospitalityPicSec.src} className="d-flex justify-content-center align-items-center col-12 position-relative hospitalitySecImg" bgImageAlt="Camiguin_Lazones_Resort_Hospitality" contentClassName="w-100 h-100 position-absolute" strength={140}>
            <div className="darken-overlay w-100 h-100 position-absolute"/>
            <div className="txtHospitalitySec d-flex flex-column">
            <AnimationOnScroll animateIn="animate__slideIn">
                <span className="text-white mt-4 mb-4 fs-larger text-start w-100 fwt-med">
                    <i>
                        Call us your new home!
                    </i>
                </span>
            </AnimationOnScroll>
                {/* <span className="text-white mt-4 mb-4 fs-larger text-start w-100 fwt-med">
                    <i>
                    The Filipino Experience awaits you.
                    </i>
                </span> */}
                <span className="text-white mt-4 mb-4 fs-larger text-start w-100 fwt-med">
                    <i>
                    Book now before your room is taken!
                    </i>
                </span>
            </div>
            </Parallax>
        </section>
    )
}

export default HospitalitySec;

