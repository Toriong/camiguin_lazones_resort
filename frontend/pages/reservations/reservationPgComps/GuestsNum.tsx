import { ReduxStore } from 'globalInterfaces/interfaces';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../store';

interface Props{
    isOnAdults?: boolean
}

function GuestsNum({isOnAdults}:Props){
    const [isModalOn, setIsModalOn] = useState(false)
    const { adultsNum, childrenNum } = store.getState().trip


    return <input type="number" defaultValue={isOnAdults ? adultsNum : childrenNum} min={0} className="border-0 border-bottom text-center"/>
}

export default GuestsNum