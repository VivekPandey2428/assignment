import React from "react";
import "./input.css"

const Input = ({placeholderText, onChange, value, type="text"}) => {
    return (
        <div className="col-3">
            <input value={value} onChange={(e) => onChange(e)} className="effect-9" type={type} placeholder={placeholderText}/>
              <span className="focus-border">
                <i></i>
              </span>
          </div>
    )
}

export default Input;