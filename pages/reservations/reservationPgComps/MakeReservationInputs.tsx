import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Button from 'react-bootstrap/Button'
import DateInputField from './DateInputField'
import GuestsNum from './GuestsNum'
import CouponInput from './CouponInput'

function MakeReservationInputs() {
    const inputSecs = [{ title: 'ARRIVAL', comp: <DateInputField isOnStartDate /> }, { title: 'DEPARTURE', comp: <DateInputField /> }, { title: 'ADULTS', comp: <GuestsNum isOnAdults /> }, { title: 'CHILDREN', comp: <GuestsNum /> }, { title: 'COUPON CODE', comp: <CouponInput /> }]


    return (
        <div className="d-flex flex-column w-100 mt-5">
            <section className="d-flex flex-column w-100 border reservationInputField">
                <section className="w-100 d-flex h-100">
                    {inputSecs.map((section, index) => {
                        const { title, comp } = section;
                        return (
                            <div key={index} className={`d-flex h-100 flex-column pt-1 w-25 h-100 ${index !== 4 ? 'border-end' : ''}`} >
                                <section className="border-bottom">
                                    <h6 className="w-100 ps-2">{title}</h6>
                                </section>
                                <section className='h-100 d-flex justify-content-center align-items-center inputCompSec'>
                                    {comp}
                                </section>
                            </div>
                        )
                    })}
                </section>
            </section>
            <section className="w-100 d-flex justify-content-end pe-4">
                <Button className="bg-warning border-0">SEARCH</Button>
            </section>
        </div>
    )
}

{/* <FullCalendar
plugins={[dayGridPlugin]}
initialView="dayGridMonth"
/> */}

export default MakeReservationInputs
