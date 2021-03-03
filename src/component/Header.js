import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';



class Header extends Component {


    render(){
        return(
            <UserContext.Consumer>
                {userContext=>
            <ThemeContext.Consumer>

          {theme =>  <header style={{border:'solid 2px' ,padding:"1em",margin:'1em',display:"flex",justifyContent:'space-between',...theme}}>
               <h1>header</h1>
              {
                  userContext.auth?
                  <span>hi {`${userContext.user.name}`}<span onClick={()=>userContext.logout} style={{color:'red'}}>logout</span></span>:<Link to ='/'>login</Link>
              }
           </header>
           }
           </ThemeContext.Consumer>
    }
           </UserContext.Consumer>
        )
    }
}

export default Header;