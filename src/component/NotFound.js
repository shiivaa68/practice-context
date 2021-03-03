import React, { useContext } from 'react';
import ThemeContext from './ThemeContext'
import {Link} from 'react-router-dom'
import Login from './Login';

function NotFound () {

    const theming = useContext(ThemeContext)
    console.log(theming,'tehhming')
    return(
        <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em',...theming}}>
            <h1>
                not found page
            </h1>
            <p>
                go to home page <Link to ="/">Home</Link>
            </p>
        </article>
    )
}

export default NotFound;