import React, { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.className = savedTheme + '-theme';
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        console.log(`Switching to ${newTheme} theme`);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.className = newTheme + '-theme';
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
