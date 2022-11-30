import React from 'react';
import Button from 'react-bootstrap/Button'


// BRAIN DUMP:
// this button can have dynamic button css classes depending on the viewport 
interface Props {
    buttonKeyForRerender: String
}


const MakeReservation: React.FC<Props> = ({ buttonKeyForRerender }) => {
    return <Button key={buttonKeyForRerender as string} variant="primary" className="pt-3 makeReservationBtnStyles ps-4 pe-4 pb-3 position-absolute rounded text-white medFontWeight largeFontSize slideLeft">Make a reservation</Button>
}

export default MakeReservation;