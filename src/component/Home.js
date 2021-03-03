import React, { useContext } from 'react';
import ThemeContext from './ThemeContext'

const Home = ()=>{
const themy = useContext(ThemeContext)

    return(
        <article  style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em',...themy}}>
            <h1>my home page</h1>
            <p>
                you can continu aganin
            </p>
            <p>
                dont worry about it
            </p>
            <p>
                every thing will be ok babe
            </p>
        </article>
    )
}

export default Home;