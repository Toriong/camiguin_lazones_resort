import { useState } from 'react';
import Calendar from 'react-calendar';
import { useSelector, useDispatch } from 'react-redux';
import { dates } from '../../../redux/stayDates'

interface Props{
    isOnStartDate?: boolean
}

function DateInputField({ isOnStartDate }:Props) {
    const [isCalenderOn, setIsCalenderOn] = useState(false)

    return (
        <div>
            <span>{isOnStartDate ? dates.getInitialState().startDate : dates.getInitialState().endDate }</span>
        </div>

    )
}

export default DateInputField;