import React from 'react';


const Button = (props) => {
    return (
        <button {...props}>{props.nama}</button>
    )
}

export default Button
