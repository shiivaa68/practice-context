import React, { Component } from 'react';
import ThemeContext from './ThemeContext'

class Footer extends Component{
    render(){
        return(
            <footer style={{border:'solid 1px',padding:'1em',margin:'1em',...this.context}}>
                <h1>footer</h1>
            </footer>
        )
    }
};

Footer.contextType =ThemeContext

export default Footer;