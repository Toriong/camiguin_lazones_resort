import Image from "next/image"



const HospitalitySec = () => {

    return (
        <section className='row noMargin noPadding flex-nowrap hospitalitySec'>
            <section className='d-flex justify-content-center align-items-center col-12 position-relative' style={{ height: "800px"}}>
              <Image src="/imgs/outsideBack.jpeg" alt="hospitalityImg_Camiguin_Resort" className='w-100 h-100 parallax' layout='fill'/>
              <div className="darken w-100 h-100 position-absolute"/>
            </section>
        </section>
    )
}

export default HospitalitySec;

