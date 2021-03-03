import React, { useEffect, useState } from 'react';
import {Switch,Route} from 'react-router-dom'
import HeaderC from './component/HeaderC';
import Header from './component/Header';

import Footer from './component/Footer';
import Home from './component/Home';
import NotFound from './component/NotFound';
import Sidebar from './component/Sidebar';
import Post from './component/subcomponent/Post'
import Login from './component/Login';
import Profile from './component/subcomponent/Profile';
import PrivateRoute from './component/subcomponent/PrivateRoute'
import cookie from 'js-cookie'
import ThemeContext ,{colorTheme} from './component/ThemeContext';
import UserContext from './component/UserContext'

function App() {

const [theme,setThem] = useState(colorTheme.light)
const [loading,setLoading] = useState(true)
const[user,setUser] = useState({})
const[auth,setAuth] = useState(false)

useEffect(() => {
  cookie.get('token') ? login() :setLoading(false)
},[])


function login(){
  setLoading(true)
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())
  .then(result =>{
    cookie.set('token','my-token',{expires:7})
    setUser(result)
    setAuth(true)
    setLoading(false)
  })
}


function logout(){
  cookie.remove('token')
  setUser({})
  setAuth(false)
}

if(loading){
  return 'loading...'
}



  return (
    <UserContext.Provider value={{user,auth,login,logout}}>  
    <ThemeContext.Provider value={theme} >
    <div className="App">
      <div>
        {theme === colorTheme.light ? <button onClick={()=>setThem(colorTheme.dark)}> DARK</button> :<button onClick={()=>setThem(colorTheme.light)}>LIGHT</button>} 
      </div>
      <Header/>
     {/* <HeaderC/> */}
     <section style={{display:'flex'}}>
       <Sidebar/>
       <Switch>
         <Route path="/" exact component={Home}/>
         {/* <Route path="/post" component={Post}/> */}
         <Route path="/post/:id" component={Post}/>
         <Route path="/login" component={Login}/>
         <PrivateRoute  path="/profile" component={Profile}/>
         <Route path="*" component={NotFound}/>
       </Switch>
     </section>
    <Footer/>
    </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
