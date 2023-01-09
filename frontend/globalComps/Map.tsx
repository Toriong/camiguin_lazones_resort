import { GOOGLE_API_KEY } from '../secureInfo';
import { longAndLatOfResort } from '../data/appInfo'
import Image from 'next/image'
import useGetViewPortWidth from 'customHooks/useGetWidth';

const {lat, long } = longAndLatOfResort

function Map() {
    const _src = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=16&size=${900}x${350}&markers=anchor:32,10%7Cicon:https://goo.gl/5y3S82%7CCanberra+ACTsize:mid%7Ccolor:red|${lat},${long}&key=${GOOGLE_API_KEY}`;

    return <img src={_src} alt="Camiguin_Lazones_Resort_Map" className='w-75'/>
    
}

export default Map;