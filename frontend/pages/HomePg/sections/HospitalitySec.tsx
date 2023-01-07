import Image from "next/image"
import { clientDomain } from '../../../data/appInfo'
import { Parallax } from 'react-parallax';
import HospitalityPicSec from '../../../public/imgs/outsideBack.jpeg'


const HospitalitySec = () => {
    

    return (
        <section className='row noMargin noPadding flex-nowrap hospitalitySec'>
            <Parallax bgImage={HospitalityPicSec.src} className="d-flex justify-content-center align-items-center col-12 position-relative hospitalitySecImg" bgImageAlt="Camiguin_Lazones_Resort_Hospitality" contentClassName="w-100 h-100 position-absolute">
            <div className="darken-overlay w-100 h-100 position-absolute"/>
            </Parallax>

            {/* <div className='d-flex justify-content-center align-items-center col-12 position-relative hospitalitySecImg' style={{ height: "900px", backgroundImage: `url(${clientDomain}/imgs/outsideBack.jpeg)` }}>
              <div className="darken w-100 h-100 position-absolute"/>
            </div> */}
        </section>
    )
}

export default HospitalitySec;

