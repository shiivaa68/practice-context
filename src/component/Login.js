import React, { useContext } from 'react'
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';



function Login (){

    const {login,auth} = useContext(UserContext)
    const themyLogin = useContext(ThemeContext)

    const history = useHistory()
    const location = useLocation()

    function singIn () {
        const { oldPath } = location.state || {oldPath: '/'}
    
        login()
        history.push(oldPath)
      }
    
      if (auth) {
        return <Redirect to="/"/>
      }



    return(
        <article  style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em' ,...themyLogin}}>
            <button onClick={()=> singIn()}>LOGIN</button>
        </article>
    )
}


export default Login;