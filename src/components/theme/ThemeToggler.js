import React, { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className="theme-toggler"
            onClick={toggleTheme}
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 9999,
                background: '#fff',
                border: '1px solid #ccc',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
            }}
        >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
    );
};

export default ThemeToggler;
