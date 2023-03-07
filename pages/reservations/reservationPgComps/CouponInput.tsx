import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTrip, getTripInfo, updateCoupon } from 'redux/trip';
import { store } from '../../../store';


function CouponInput() {
    const dispatch = useDispatch()
    // how to use the useSelector hook?
    // const trip = useSelector(getTripInfo)

    function handleOnchange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(updateCoupon(event.target.value))
    }


    return <input onChange={handleOnchange} className="border-0 border-bottom text-center" />
}

export default CouponInput