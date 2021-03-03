import React, { Component } from 'react';
import ThemeContext from '../component/ThemeContext';
import '../component/style.css'

import {NavLink} from 'react-router-dom'

class Sidebar extends Component{

static contextType = ThemeContext
    
    render(){
        return(
            <aside style={{flex: 1, border: 'solid 1px', padding: '1em', margin: '1em',...this.context}}>
                <h3>aside</h3>
                <ul>
                    <li><NavLink to="/" exact>home</NavLink></li>
                    <li><NavLink to='/post/1'>post</NavLink></li>
                    <li><NavLink to='/profile'>profile</NavLink></li>
                    <li><NavLink to='/tasks'>Task list</NavLink></li>

                </ul>
            </aside>
        )
    }
}

export default Sidebar;