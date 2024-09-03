import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuList = ({ className, menuItems, listStyle, language }) => {
    return (
        <ul className={className}>
            {
                menuItems?.map(item => {
                    return (
                        <li key={item?.label} className={listStyle}>
                            <NavLink to={item?.path} >{language === 'en' ? item?.en : item?.bn}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MenuList
