import React, { useContext } from 'react'
import { Route, useLocation,Redirect } from 'react-router-dom';
import UserContext from '../UserContext'

function PrivateRoute ({children,...props}) {

    const {auth} =useContext(UserContext)

    const location = useLocation()
    console.log(location,'location')

    if(auth){
        return <Route {...props}>{children}</Route>
    }
    else {
        return <Redirect to ={{pathname:'/login',state:{oldPath:location.pathname}}} />
    }

}

export default PrivateRoute;