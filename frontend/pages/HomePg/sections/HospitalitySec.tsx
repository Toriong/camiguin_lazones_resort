import { randomUUID } from "crypto";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Parallax } from 'react-parallax';
import HospitalityPicSec from '../../../public/imgs/outsideBack.jpeg'
import { v4 as uuidv4 } from 'uuid';
import useOnScreen from "customHooks/useOnScreen";
import MakeReservation from "globalBtns/MakeReservation";

interface ref {
    current: Object
}


const HospitalitySec = () => {
    const callUsRef = useRef<HTMLElement>(null);
    const bookNowRef = useRef<HTMLElement>(null);
    const filipinoExperienceRef = useRef<HTMLElement>(null);
    const [forceRender, setForceRender] = useState(0)
    const callUsRefId = uuidv4();
    const bookNowRefId = uuidv4();
    const filipinoExperienceId = uuidv4();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // Check if the element is intersecting the viewport
                if (entry.intersectionRatio > 0) {
                    console.log("forceRender: ", forceRender)
                    setForceRender(forceRenderNum => forceRenderNum + 1)
                }
            });
        });

        callUsRef.current && observer.observe(callUsRef.current);
        bookNowRef.current && observer.observe(bookNowRef.current);
        filipinoExperienceRef.current && observer.observe(filipinoExperienceRef.current);
    }, []);


    return (
        <section className='row noMargin noPadding flex-nowrap hospitalitySec'>
            <Parallax bgImage={HospitalityPicSec.src} className="d-flex justify-content-center align-items-center col-12 position-relative hospitalitySecImg" bgImageAlt="Camiguin_Lazones_Resort_Hospitality" contentClassName="w-100 h-100 position-absolute" strength={140}>
                <div className="darken-overlay w-100 h-100 position-absolute" />
                <div className="txtHospitalitySec d-flex flex-column pt-2">
                    <span key={callUsRefId} ref={callUsRef} className="text-white fs-larger text-start w-100 fwt-med  slideRight">
                        <i>
                            Call us your new home!
                        </i>
                    </span>
                    <span key={filipinoExperienceId} ref={filipinoExperienceRef} className="text-white mt-4 mb-4 fs-larger text-start w-100 fwt-med slideRight">
                        <i>
                            The Filipino Experience awaits you <span>🇵🇭</span>.
                        </i>
                    </span>
                    <span key={bookNowRefId} ref={bookNowRef} className="text-white mt-4 mb-4 fs-larger text-start w-100 fwt-med slideRight">
                        <i>
                            Book now before your room is taken!
                        </i>
                    </span>
                </div>
                <div className="makeReservationDiv w-100 d-flex justify-content-center align-items-center">
                    <MakeReservation btnTxt={"Book now!"} />
                </div>
            </Parallax>
        </section>
    )
}

export default HospitalitySec;

