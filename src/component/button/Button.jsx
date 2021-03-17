import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'


//button styles array
const STYLES = ['btn-primary', 'btn-outline'];
//button sizes array
const SIZES = ['btn-medium', 'btn-large'];

const Button = ({ onClick, type, children, buttonStyle, buttonSize }) => {

    //check button style and set classname
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    //check button size and set classname
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <>
          <Link to="/" className="btn-mob">
              <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}  type={type} onClick={onClick}>{children}</button>
          </Link>  
        </>
    )
}

export default Button
