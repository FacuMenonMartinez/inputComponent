import { useState, useEffect } from "react";

function HelperTextInput( {type, color, size, helperText} ){
    const [text, setText] = useState('');

    useEffect(()=>{
        if(helperText){
            setText(helperText)
        }
    },[]);

    return(
    <div className="helperTextContainer">
        <input type={type} className={`defaultInput ${color} ${size}`} placeholder="Helper Text Input" />
        <label className={`helperText ${color}`}>{text}</label>
    </div>)
}

export default HelperTextInput