import { useRouter } from 'next/router'

// this comp will have the following buttons:
// Reserve button
// if this button is pressed, then present the reserve button input field

// Find Reservation button
// if this button is pressed, then present the 'Find Reservation' input field 

function ReservationPgBtns() {
    const isUserLogin = (typeof window !== "undefined") ? !!window.localStorage.getItem('user') : false;
    const router = useRouter();
    const { section } = router.query
    const isOnReserve = section === 'reserve'
    const isOnRegister = section === 'register';
    const isOnLogin = section === 'login'
    const isOnFindReservation = section === 'find-reservation'

    function handleBtnClick(path: string) {
        router.push(`/reservations/${path}`)
    }

    return (
        <section className="ps-3 pe-3">
            <div className="w-100 d-flex justify-content-center align-items-center border-bottom">
                <section className="d-flex">
                    <button
                        name='reserve' onClick={event => { handleBtnClick(event.target.name) }}
                        className={`noBtnStyles ${isOnReserve ? 'text-decoration-underline' : ''}`}
                    >
                        RESERVE
                    </button>
                    {!isUserLogin &&
                        <>
                            <button
                                name="register"
                                className={`noBtnStyles ${isOnRegister ? 'text-decoration-underline' : ''}`}
                                onClick={event => { handleBtnClick(event.target.name) }}
                            >
                                REGISTER
                            </button>
                            <button
                                name="login"
                                className={`noBtnStyles ${isOnLogin ? 'text-decoration-underline' : ''}`}
                                onClick={event => { handleBtnClick(event.target.name) }}
                            >
                                LOGIN
                            </button>
                        </>
                    }
                    <button
                        name="find-reservation"
                        className={`noBtnStyles ${isOnFindReservation ? 'text-decoration-underline' : ''}`}
                        onClick={event => { handleBtnClick(event.target.name) }}
                    >
                        FIND RESERVATION
                    </button>
                </section>
            </div>
        </section>
    )
}


export default ReservationPgBtns
