import React from 'react';
import '../stylesheets/Button.css';

export default function Button(props){

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    }

    return (
        <div
        className={`button-container ${isOperator(props.children)? 'operator':''}`.trimEnd()}>
            {props.children}
        </div>
    );
}