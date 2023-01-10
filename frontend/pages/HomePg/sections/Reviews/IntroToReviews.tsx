import Logo from "layout/Logo"

const IntroToReviews = () => {
    return (
        <section className='row ps-5 pe-5 introToReviews bg-light pb-5 p-3'>
            <section className='d-flex justify-content-center align-items-center'>
                <Logo width={100} height={100}/>
            </section>
            <section className='d-flex justify-content-center align-items-center mt-2'>
              <h4 className="display-6 fst-italic text-center d-flex d-block justify-content-center justify-content-sm-start align-items-center align-items-md-stretch googleReviewsTxt h4Tag">4.8/5 ⭐ Stars On Google Reviews!</h4>
            </section>
          </section>
    )
}

export default IntroToReviews
