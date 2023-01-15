import { ReduxStore } from 'globalInterfaces/interfaces';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { useSelector, useDispatch } from 'react-redux';


interface Props {
    isOnStartDate?: boolean
    isOnGuestsNum?: boolean
}

function DateInputField({ isOnStartDate, isOnGuestsNum }: Props) {
    const [isCalenderOn, setIsCalenderOn] = useState(false)
    const stayDates = useSelector((state: ReduxStore) => ({ startDate: state.startDate, endDate: state.endDate }))

    return (
        <div>
            {!!isOnGuestsNum && <span>{isOnStartDate ? stayDates.startDate : stayDates.endDate}</span>}
        </div>

    )
}

export default DateInputField;