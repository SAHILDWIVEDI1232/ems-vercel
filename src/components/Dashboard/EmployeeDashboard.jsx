// import React from 'react'
// import Header from '../other/Header'
//  import TaskNumber from '../other/TaskNumber'
// import TaskList from '../TaskList/TaskList'

// const EmployeeDashboard = (props) => {

//   return (
//     <div className='p-10 bg-[#1C1C1C] h-screen'>
        
//         <Header changeUser={props.changeUser} data={props.data}/>
//         <TaskNumber data={props.data} />
//         <TaskList data={props.data} />
//     </div>
//   )
// }

// export default EmployeeDashboard

import React, { useContext } from 'react'

import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = ({ changeUser, data }) => {

  const [userData] = useContext(AuthContext)

  const currentUser =
    userData?.find((employee) => employee.id === data.id) || data

  return (
    <div className='p-20 bg-[#1c1c1c] text-white h-screen'>

      <Header
        changeUser={changeUser}
        data={currentUser}
      />

      <TaskNumber
        data={currentUser}
      />

      <TaskList
        data={currentUser}
      />

    </div>
  )
}

export default EmployeeDashboard