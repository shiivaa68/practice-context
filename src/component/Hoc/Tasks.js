import React, { useState } from 'react'
import Button from './Button'
import ACL from './ACL'

const Tasks =()=> {

 const  listsDo = {
      list: [
        {id: 1, task: 'Dish washing'},
        {id: 2, task: 'Go to car wash'},
      ]
    }

    const [listtask,setListtak] = useState(listsDo.list)
 


    return (<div style={{flex: 3, border: 'solid 1px',
    padding: '1em', margin: '1em'}} >
      <Button permission="add_task">Add task</Button>
      <ol>
        {listtask.map(el => <li key={el.id}>{el.task} <Button permission="view_task" > remove task </Button></li>)}
      </ol>

     <span>dont show this botton</span><Button permission="view_taskS">LIMIT</Button>
    </div>)
}


export default ACL(Tasks)
