import React from 'react'

const MenuList = ({ menuItems, className }) => {
    return (
        <ul className={className}>
            {
                menuItems?.map(item => {
                    return (
                        <li key={item.label}>
                            <a href={item.path}>{item.label}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MenuList
