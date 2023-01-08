/* eslint-disable react/no-unescaped-entities */
import { MDBFooter } from 'mdb-react-ui-kit';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import moment from 'moment'
import { businessNum } from 'data/appInfo';
import FacebookBtn from 'globalBtns/FaceBookBtn';
import TwitterBtn from 'globalBtns/TwitterBtn';
import InstagramBtn from 'globalBtns/Instagram';
import Logo from 'layout/Logo';


const Footer = () => {
    const currentYear = moment().year();

    const handlePhoneNumClick = () => { window.open(`tel:+${businessNum}`) };

    const handleEmailClick = () => {

    }




    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <div className='subContainerFooter'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='d-none d-lg-block me-5'>
                        <span>Find us at the following:</span>
                    </div>
                    <div className='d-flex buttonContainerFooter'>
                        <FacebookBtn />
                        <TwitterBtn />
                        <InstagramBtn />
                    </div>
                </section>

                <section className=''>
                    <div className='container text-center text-md-start mt-5'>
                        <div className='row mt-3 position-relative'>
                            {/* <div className="logoWrapper"> */}
                                <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 logoContainerFooter'>
                                    <Logo width={50} height={50} />
                                    <h6 className='mt-2 text-uppercase fw-bold mb-4 text-center text-lg-start'>
                                        Camiguin Lazones Resort
                                    </h6>
                                    <p className='text-center text-lg-start'>
                                        <i>
                                            "To serve first."
                                        </i>
                                    </p>
                                </div>
                            {/* </div> */}

                            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='/products' className='text-reset'>
                                        T-Shirts
                                    </a>
                                </p>
                                <p>
                                    <a href='/products' className='text-reset'>
                                        Souvenirs
                                    </a>
                                </p>
                            </div>

                            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Navigate to:</h6>
                                <p>
                                    <a href='/products' className='text-reset'>
                                        Rooms
                                    </a>
                                </p>
                                <p>
                                    <a href='/business' className='text-reset'>
                                        Reservation
                                    </a>
                                </p>
                                <p>
                                    <a href='/contact' className='text-reset'>
                                        Photos
                                    </a>
                                </p>
                            </div>

                            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p className='contactTxtFooter' onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                                    <AiOutlineMail className='iconColor me-1' />
                                    pttorion@gmail.com
                                </p>
                                <p className='contactTxtFooter' onClick={handlePhoneNumClick} style={{ cursor: 'pointer' }}>
                                    <AiOutlinePhone className='iconColor me-1' />
                                    #{businessNum}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    @{currentYear} Copyright:
                    <span className='text-reset fw-bold ms-1'>
                        <u>
                            Gabriel Torion
                        </u>
                    </span>
                </div>
            </div>
        </MDBFooter>
    );
}


export default Footer;