import ourRooms from '../../../../data/ourRooms.json';
import Room from './Room'


const OurRoomsSec = () => {
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <ul className="roomsList noPadding">
            {ourRooms.map(({ src, description, alt, title }, index) => <Room index={index} key={index} src={src} description={description} alt={alt} title={title} />)}
            </ul>
        </div>
    )
    
}

export default OurRoomsSec;