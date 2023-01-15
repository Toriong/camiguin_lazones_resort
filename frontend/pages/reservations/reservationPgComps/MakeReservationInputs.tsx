import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Button from 'react-bootstrap/Button'
import DateInputField from './DateInputField'

function MakeReservationInputs() {
    const HEADER_TITLES = ['ARRIVAL', 'DEPARTURE', 'ADULTS', 'CHILDREN', 'CODE']
    const INPUT_FIELDS = [<DateInputField key={1} isOnStartDate/>, <DateInputField key={2} />]

    return (
        <div className="d-flex flex-column w-100 mt-5">
            <section className="d-flex flex-column w-100 border reservationInputField">
                <section className="w-100 d-flex border-bottom">
                    {HEADER_TITLES.map((title, index) =>
                        <div key={index} className={`inputFieldHeaderTitle pt-1 w-25 ${index !== 4 ? 'border-end' : ''}`} >
                            <h6 className="w-100 ps-2">{title}</h6>
                        </div>
                    )}
                </section>
                <section className="w-100 d-flex">
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
