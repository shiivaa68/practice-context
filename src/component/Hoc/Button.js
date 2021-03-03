import React from 'react'
import ACL from './ACL'

const  Button =(props)=> {

    // console.log(props,'buttom')
    return (
      <button>{props.children}</button>
    )
  }

export default ACL(Button)