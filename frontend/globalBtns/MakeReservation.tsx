import React from 'react';
import Button from 'react-bootstrap/Button'



interface Props {
    buttonKeyForRerender?: String
    btnTxt?: String,
    isSlideUp?: boolean
    isPulsing?: boolean
    isBtnLarger?: boolean
}


function MakeReservation({ buttonKeyForRerender, btnTxt, isSlideUp, isPulsing, isBtnLarger }: Props) {
    let _className = `pt-3 makeReservationBtnStyles ps-4 pe-4 pb-3 position-absolute rounded text-white medFontWeight largeFontSize ${isSlideUp ? 'slideUp' : 'slideLeft'}`
    _className = isPulsing ? (_className + ' pulse') : _className


    return <Button key={buttonKeyForRerender as string} variant="primary" className={_className}>{btnTxt ?? "Make a reservation"}</Button>
}

export default MakeReservation;