import React, { useContext } from 'react'
import UserContext from '../UserContext'
import ThemeContext from '../ThemeContext'


function Profile(){

    const themeProfile = useContext(ThemeContext)
    const {user} =useContext(UserContext)

    return(
        <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em',...themeProfile}}>
            <h1>my profile</h1>
            <p>
                my name is  <span  style={{color:'red'}}>{user.name}</span>
            </p>
        </article>
    )
}

export default Profile;