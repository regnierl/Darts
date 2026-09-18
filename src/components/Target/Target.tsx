import { useDispatch, useSelector } from 'react-redux';
import { Launch } from '../../models/launch';
import { addCurrentLaunch } from '../../redux/players';

function Target() {
    const sizeImage: number = 1000;
    const dispatch = useDispatch()
    const players = useSelector((state: any) => state.players)
    
    const values: { angle: number, value: number }[] = [
        {angle: 9, value: 6},
        {angle: 28, value: 10},
        {angle: 45, value: 15},
        {angle: 63, value: 2},
        {angle: 81, value: 17},
        {angle: 99, value: 3},
        {angle: 117, value: 19},
        {angle: 135, value: 7},
        {angle: 153, value: 16},
        {angle: 171, value: 8},
        {angle: 189, value: 11},
        {angle: 207, value: 14},
        {angle: 225, value: 9},
        {angle: 243, value: 12},
        {angle: 261, value: 5},
        {angle: 279, value: 20},
        {angle: 297, value: 1},
        {angle: 315, value: 18},
        {angle: 333, value: 4},
        {angle: 351, value: 13},
        {angle: 360, value: 6},
    ]

    const multiplicators: { length: number, value: number}[] = [
        {length: 0.03, value: 50},
        {length: 0.075, value: 25},
        {length: 0.46, value: 1},
        {length: 0.5, value: 3},
        {length: 0.76, value: 1},
        {length: 0.8, value: 2},
    ]

    const getValue = (event: { target: any; clientX: number; clientY: number; }) => { 
        const img = event.target; const rect = img.getBoundingClientRect(); 
        const x = event.clientX - rect.left - rect.width / 2; 
        const y = event.clientY - rect.top - rect.height / 2; 
        // Calculer l'angle en radians 
        const radianAngle = Math.atan2(y, x); // Convertir l'angle en degrés 
        const degreeAngle = radianAngle * (180 / Math.PI); 
        // Ajuster l'angle pour qu'il soit positif (entre 0 et 360 degrés) 
        const adjustedAngle = degreeAngle < 0 ? 360 + degreeAngle : degreeAngle; 
        const result = values.find(entry => adjustedAngle <= entry.angle)
        return result ? result : { angle: 0, value: 0}
    }

    const getMultiplicator = (event: { target: any; clientX: number; clientY: number; }) => { 
        const img = event.target; 
        const rect = img.getBoundingClientRect(); 
        const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2); 
        const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);

        // Calculer la distance euclidienne par rapport au centre de l'image 
        const dist = Math.sqrt(x * x + y * y); 
        console.log("dist", dist)
        const result = multiplicators.find(entry => dist <= entry.length)
        return result ? result : {length: -1, value: 0}

    }

    const handleClick = (event: { target: any; clientX: number; clientY: number; }) => { 

        if (players.currentLaunch.length === 3) return;
        
        let result: Launch;
        const multiplicator = getMultiplicator(event);
        const value = getValue(event);

        switch(multiplicator?.value) {
            case 50:
                result = {id: -1, value: 25, multiplicator: 2}
                break;
            case 25:
                result = {id: -1, value: 25, multiplicator: 1}
                break;
            default:
                result = {id: -1, value: value.value, multiplicator: multiplicator.value}
        }

        dispatch(addCurrentLaunch(result));
        console.log("result:", result);
    }
        
    return (
        <>
            <img src="target.png" width={sizeImage} onClick={handleClick}></img>
        </>
    )
}

export default Target;  