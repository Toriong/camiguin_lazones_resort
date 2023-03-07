import { ReduxStore } from 'globalInterfaces/interfaces';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import { FcCalendar } from 'react-icons/fc'
import Button from 'react-bootstrap/Button'
import { store } from '../../../store';


interface Props {
    isOnStartDate?: boolean
}

function DateInputField({ isOnStartDate }: Props) {
    const [isCalenderOn, setIsCalenderOn] = useState(false)
    const { startDate, endDate } = store.getState().trip

    return (
        <div className="d-flex justify-content-center align-items-center h-100 position-relative">
            <span>{isOnStartDate ? startDate : endDate}</span>
            <Button className="noBtnStyles"><FcCalendar/></Button>
        </div>
    )
}

export default DateInputField;