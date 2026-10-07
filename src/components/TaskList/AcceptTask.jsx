
// import React from 'react'

// const AcceptTask = ({ data }) => {
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-pink-400 rounded-xl'>

//       <div className='flex justify-between items-center'>
//         <h3 className='bg-red-600 text-sm px-2 py-1 rounded'>
//           {data.category}
//         </h3>

//         <h4 className='text-sm'>
//           {data.taskDate}
//         </h4>
//       </div>

//       {/* Task Title */}
//       <h2 className='mt-5 text-2xl font-semibold'>
//         {data.taskTitle}
//       </h2>

//       {/* Task Description */}
//       <p className='text-sm mt-2'>
//         {data.taskDescription}
//       </p>

//       <div className='flex justify-center mt-16'>
//         <button className='bg-cyan-600 py-1 px-2 text-sm'>
//           Mark as Accepted
//         </button>
//       </div>

//     </div>
//   )
// }

// export default AcceptTask


import React, { useContext } from 'react'

import { AuthContext } from '../../context/AuthProvider'

import { updateLocalStorage } from '../../utils/localStorage'

const AcceptTask = ({ data }) => {

  const [userData, setUserData] = useContext(AuthContext)

  const completeTask = () => {

    const updatedData = userData.map((employee) => {

      const taskExists = employee.tasks.some(
        (task) => task.taskNumber === data.taskNumber
      )

      if (!taskExists) {
        return employee
      }

      const updatedTasks = employee.tasks.map((task) => {

        if (task.taskNumber === data.taskNumber) {

          return {
            ...task,
            active: false,
            newTask: false,
            completed: true,
            failed: false
          }
        }

        return task
      })

      return {
        ...employee,

        tasks: updatedTasks,

        taskCounts: {
          ...employee.taskCounts,
          active: employee.taskCounts.active - 1,
          completed: employee.taskCounts.completed + 1
        }
      }
    })

    setUserData(updatedData)

    updateLocalStorage(updatedData)
  }


  const failTask = () => {

    const updatedData = userData.map((employee) => {

      const taskExists = employee.tasks.some(
        (task) => task.taskNumber === data.taskNumber
      )

      if (!taskExists) {
        return employee
      }

      const updatedTasks = employee.tasks.map((task) => {

        if (task.taskNumber === data.taskNumber) {

          return {
            ...task,
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        }

        return task
      })

      return {
        ...employee,

        tasks: updatedTasks,

        taskCounts: {
          ...employee.taskCounts,
          active: employee.taskCounts.active - 1,
          failed: employee.taskCounts.failed + 1
        }
      }
    })

    setUserData(updatedData)

    updateLocalStorage(updatedData)
  }


  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-pink-400 rounded-xl'>

      <div className='flex justify-between items-center'>

        <h3 className='bg-red-600 text-sm px-2 py-1 rounded'>
          {data.category}
        </h3>

        <h4 className='text-sm'>
          {data.taskDate}
        </h4>

      </div>

      <h2 className='mt-5 text-2xl font-semibold'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-2'>
        {data.taskDescription}
      </p>

      <div className='flex justify-center gap-2 mt-16'>

        <button
          onClick={completeTask}
          className='bg-cyan-600 py-1 px-2 text-sm rounded'
        >
          Mark as Complete
        </button>

        <button
          onClick={failTask}
          className='bg-red-600 py-1 px-2 text-sm rounded'
        >
          Fail
        </button>

      </div>

    </div>
  )
}

export default AcceptTask