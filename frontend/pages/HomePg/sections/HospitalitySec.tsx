import Image from "next/image"
import { clientDomain } from '../../../data/appInfo'



const HospitalitySec = () => {
    

    return (
        <section className='row noMargin noPadding flex-nowrap hospitalitySec'>
            <div className='d-flex justify-content-center align-items-center col-12 position-relative hospitalitySecImg' style={{ height: "900px", backgroundImage: `url(${clientDomain}/imgs/outsideBack.jpeg)` }}>
              <div className="darken w-100 h-100 position-absolute"/>
            </div>
        </section>
    )
}

export default HospitalitySec;

