import React from "react";
import "./ButtonForm.css";
import Home2 from "../pages/Home2";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const ButtonForm = ({
    children,
    onClick
}) => {

    return (
        <button onClick={onClick} className="buttonform">
            {children}

        </button>
    )
}

export default ButtonForm;