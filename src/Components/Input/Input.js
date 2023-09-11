import { useState, useEffect } from "react";
import HelperTextInput from "../InputsStates/HelperTextInputs";
import MultilineInputs from "../InputsStates/MultilineInputs";
import IconInputs from "../InputsStates/IconInputs";
import "./input.css";

function Input({ state, type, color, size, helperText, icon, iconDirection }) {

    const [inputState, setInputState] = useState('default');
    const [inputType, setInputType] = useState('text')

    useEffect(() => {
        if (type) {
            setInputType(type.toLowerCase());
        }
        if (state) {
            setInputState(state.toLowerCase().replace(" ","-"));
        }
    }, [])

    return (
        <div>
            {inputState === 'default' 
                ? <input className={`defaultInput ${color} ${size}`} type={inputType} placeholder="Placeholder" />
                : inputState === 'icon'
                ? <IconInputs iconDirection={iconDirection} color={color} type={type} size={size} icon={icon}/>
                : inputState ==='helper-text'
                ? <HelperTextInput type={type} color={color}  size={size} helperText={helperText}/>
                : inputState === 'multiline'
                ?<MultilineInputs/>
                :<input className={`defaultInput disabledInput`} type={inputType} placeholder="Disabled" disabled />}
        </div>
    )
}

export default Input