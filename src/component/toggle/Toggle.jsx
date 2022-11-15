import { UilMoon, UilSun } from '@iconscout/react-unicons'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Context'
import './toggle.css'

const Toggle = () => {
    const { darkMode, dispatch } = useContext(ThemeContext)
    const handleClick = () => {
        dispatch({ type: 'TOGGLE' })
    }

    return (
        <div className="toggle">
            <UilSun />
            <UilMoon />
            <div
                className="t-button"
                style={darkMode ? { right: '2px' } : { left: '2px' }}
                onClick={handleClick}
            ></div>
        </div>
    )
}

export default Toggle
