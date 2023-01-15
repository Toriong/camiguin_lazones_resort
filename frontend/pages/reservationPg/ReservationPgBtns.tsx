

// this comp will have the following buttons:
// Reserve button
// if this button is pressed, then present the reserve button input field

// Find Reservation button
// if this button is pressed, then present the 'Find Reservation' input field 

function ReservationPgBtns() {
    const isUserLogin = typeof window !== "undefined" ? !!window.localStorage.getItem('user') : false;

    return (
        <section className="ps-3 pe-3">
            <div className="w-100 d-flex justify-content-center align-items-center border-bottom">
                <section className="d-flex">
                    <button className="noBtnStyles">
                        RESERVE
                    </button>
                    {!isUserLogin &&
                        <>
                            <button className="noBtnStyles">
                                REGISTER
                            </button>
                            <button className="noBtnStyles">
                                LOGIN
                            </button>
                        </>
                    }
                    <button className="noBtnStyles">
                        RESERVE
                    </button>
                </section>
            </div>
        </section>
    )
}


export default ReservationPgBtns
