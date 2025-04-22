import React, { useState, useRef } from 'react';

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
            {counter}
        </div>
    );

}

export default ProjectCounter;