import React from 'react';

const Button = ({leftIcon, title, className }) => {
    return (
        <button className={className}>
            {leftIcon}
            {title}
        </button>
    )
}

export default Button
