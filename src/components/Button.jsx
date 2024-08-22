import React from 'react';

const Button = ({ leftIcon, title, rightIcon, className }) => {
    return (
        <button className={className}>
            {leftIcon}
            {title}
            {rightIcon}
        </button>
    )
}

export default Button
