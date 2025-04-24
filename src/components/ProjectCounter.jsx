import React, { useState, useRef } from 'react';
import GetImageUrl from './GetImageUrl';

export function ProjectCounter(data){
    const [counter, setCounter] = useState(0);
    const intervalRef = useRef(null);

    const handleHover = () => {
        setCounter(0);
        clearInterval(intervalRef.current);

        let i = 0;
        intervalRef.current = setInterval(() => {
        i++;
        setCounter(i);
        if (i >= 10) {
            clearInterval(intervalRef.current);
        }
        }, 200);
    };

    return (
        <div 
        onMouseOver={handleHover}
        className={data.className}>
            <p>{counter}</p>
            <img src={GetImageUrl(data.image)}/>
        </div>
    );

}

export default ProjectCounter;