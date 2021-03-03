import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';



const HeaderC  = ()=>  {

const themeHeader = useContext(ThemeContext)
const {user,auth,logout} = useContext(UserContext)

        return(
    
            <header style={{border:'solid 2px' ,padding:"1em",margin:'1em',display:"flex",justifyContent:'space-between',...themeHeader}}>
               <h1>header</h1>
              {
                  auth?
                  <span>hi {`${user.name}`}<span onClick={()=>logout()} style={{color:'red'}}>logout</span></span>:<Link to ='/login'>login</Link>
              }
           </header>
 
        )
    
}

export default HeaderC;