import React from 'react'
const user = {
  name: 'Ali',
  family: 'Mousavi',
  permissions: ['view_task', 'add_task']
}

function ACL(Component){
    return (props)=>{

        // console.log(props.permission,'acl')
        return user.permissions.includes(props.permission) && <Component {...props}/>
    }
}

// function ACL(Component) {
//   return class extends React.Component {
//     render () {
//       const {permission} = this.props
//       return user.permissions.includes(permission) && <Component {...this.props} />
//     }
//   }
// }

export default ACL