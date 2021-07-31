
import React from 'react'
const themes = {
    light: {
        background: '#eeeeee'
    },
    dark: {
        background: '#222222'
    }
}

const context = React.createContext(themes.dark);
context.displayName = 'themeContext';

export {
    themes,
    context
};