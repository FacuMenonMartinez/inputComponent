import { useState, useEffect } from "react";
import 'material-symbols';


function IconInputs({ type, color, size, iconDirection, icon }) {
    const [direction, setDirection] = useState('left');
    const [iconSelected, setIconSelected] = useState('');

    useEffect(() => {
        setDirection(iconDirection.toLowerCase());
        setIconSelected(icon);
    }, []);

    return (
        <div className="icon-input-container">
            <input className={` icon-input-${direction} ${color} ${size}`} placeholder="Icon input" type={type} />
            <span className={`material-symbols-rounded ${direction}-direction`}>{iconSelected}</span>
        </div>
    )
}

export default IconInputs