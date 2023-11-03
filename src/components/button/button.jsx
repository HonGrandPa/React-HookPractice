import React from "react";

function Button(props) {

    return (
    <button onClick={props.method}>{props.icon}</button>)
}

export default Button;