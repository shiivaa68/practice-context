import React from 'react'


export const colorTheme = {
    light:{
        color:'#000000',
        background:'#eeeeee'
    },
    dark:{
        color:'#ffffff',
        background:'#222222'
    }
}



const ThemeContext = React.createContext();

export default ThemeContext;