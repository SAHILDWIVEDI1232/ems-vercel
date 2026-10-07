// import React,{useContext, useState} from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const CreateTask = () => {
// const [userData, setUserData] = useContext(AuthContext)

//   const [taskTitle, setTaskTitle] = useState("")
//   const [taskDescription, setTaskDescription] = useState("")
//   const [taskDate, setTaskDate] = useState("")
//   const [assignto, setAssignto] = useState("")
//   const [category, setCategory] = useState("")

//   const [newTask, setNewTask] = useState({})

//   const submitHandler=(e)=>{
//     e.preventDefault()

//     setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
//    const data= userData

// data.forEach(function(elem){
//   if(assignto==elem.firstName){
//     elem.tasks.push(newTask)
//     elem.taskCounts.newTask=elem.taskCounts.newTask+1;
//   }
// })
// setUserData(data)
//  console.log(data)

// setTaskTitle('')
// setCategory('');
// setAssignto('');
// setTaskDate('');
// setTaskDescription('');
//   }
//   return (
//     <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
//         <form onSubmit={(e)=>{
//           submitHandler(e)
//         }}
//         className='flex w-full flex-wrap items-start justify-between'>

//           <div className='w-[45%]'>

//             <div>
//               <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
//               <input
//               value={taskTitle}
//               onChange={(e)=>{
//                 setTaskTitle(e.target.value)
//               }}
//                 className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
//                 type="text"
//                 placeholder='Make a UI design'
//               />
//             </div>

//             <div>
//               <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//               <input
//                value={taskDate}
//               onChange={(e)=>{
//                 setTaskDate(e.target.value)
//               }}
//   className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white'
//   type="date"
// />

//             </div>

//             <div>
//               <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
//               <input
//                value={assignto}
//               onChange={(e)=>{
//                 setAssignto(e.target.value)
//               }}
//                 className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
//                 type="text"
//                 placeholder='employee name'
//               />
//             </div>

//             <div>
//               <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//               <input
//                value={category}
//               onChange={(e)=>{
//                 setCategory(e.target.value)
//               }}
//                 className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
//                 type="text"
//                 placeholder='design, dev, etc.'
//               />
//             </div>

//           </div>

//           <div className='w-[40%] flex flex-col items-start'>

//             <h3 className='text-sm text-gray-300 mb-0.5'>
//               Description
//             </h3>

//             <textarea
//               className='w-full h-36 text-sm py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 resize-none'
//             ></textarea>

//             <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
//               Create Task
//             </button>

//           </div>

//         </form>
//       </div>
//   )
// }

// export default CreateTask


// import React, { useContext, useState } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const CreateTask = () => {

//     const [userData, setUserData] = useContext(AuthContext)

//     const [taskTitle, setTaskTitle] = useState('')
//     const [taskDescription, setTaskDescription] = useState('')
//     const [taskDate, setTaskDate] = useState('')
//     const [asignTo, setAsignTo] = useState('')
//     const [category, setCategory] = useState('')

//     const [newTask, setNewTask] = useState({})

//     const submitHandler = (e) => {
//         e.preventDefault()

//         setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

//         const data = userData

//         data.forEach(function (elem) {
//             if (asignTo == elem.firstName) {
//                 elem.tasks.push(newTask)
//                 elem.taskCounts.newTask = elem.taskCounts.newTask + 1
//             }
//         })
//         setUserData(data)
//         console.log(data);

//         setTaskTitle('')
//         setCategory('')
//         setAsignTo('')
//         setTaskDate('')
//         setTaskDescription('')

//     }

//     return (
//         <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
//             <form onSubmit={(e) => {
//                 submitHandler(e)
//             }}
//                 className='flex flex-wrap w-full items-start justify-between'
//             >
//                 <div className='w-1/2'>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
//                         <input
//                             value={taskTitle}
//                             onChange={(e) => {
//                                 setTaskTitle(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
//                         />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//                         <input
//                             value={taskDate}
//                             onChange={(e) => {
//                                 setTaskDate(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
//                         <input
//                             value={asignTo}
//                             onChange={(e) => {
//                                 setAsignTo(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//                         <input
//                             value={category}
//                             onChange={(e) => {
//                                 setCategory(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
//                     </div>
//                 </div>

//                 <div className='w-2/5 flex flex-col items-start'>
//                     <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
//                     <textarea value={taskDescription}
//                         onChange={(e) => {
//                             setTaskDescription(e.target.value)
//                         }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
//                     <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
//                 </div>

//             </form>
//         </div>
//     )
// }

// export default CreateTask


import React, { useContext, useState } from 'react'

import { AuthContext } from '../../context/AuthProvider'

import { updateLocalStorage } from '../../utils/localStorage'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignto, setAssignto] = useState('')
  const [category, setCategory] = useState('')


  const submitHandler = (e) => {

    e.preventDefault()

    const employee = userData.find(
      (employee) =>
        employee.firstName.toLowerCase() ===
        assignto.trim().toLowerCase()
    )

    if (!employee) {
      alert("Employee not found")
      return
    }


    const newTask = {

      taskNumber: employee.tasks.length + 1,

      taskTitle,
      taskDescription,
      taskDate,
      category,

      active: false,
      newTask: true,
      completed: false,
      failed: false
    }


    const updatedData = userData.map((employeeData) => {

      if (employeeData.id === employee.id) {

        return {
          ...employeeData,

          tasks: [
            ...employeeData.tasks,
            newTask
          ],

          taskCounts: {
            ...employeeData.taskCounts,
            newTask:
              employeeData.taskCounts.newTask + 1
          }
        }
      }

      return employeeData
    })


    setUserData(updatedData)

    updateLocalStorage(updatedData)


    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignto('')
    setCategory('')

    alert("Task created successfully")
  }


  return (

    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>

      <form
        onSubmit={submitHandler}
        className='flex w-full flex-wrap items-start justify-between'
      >

        <div className='w-[45%]'>

          <div>

            <h3 className='text-sm text-gray-300 mb-0.5'>
              Task title
            </h3>

            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='Make a UI design'
              required
            />

          </div>


          <div>

            <h3 className='text-sm text-gray-300 mb-0.5'>
              Date
            </h3>

            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white'
              type='date'
              required
            />

          </div>


          <div>

            <h3 className='text-sm text-gray-300 mb-0.5'>
              Assign To
            </h3>

            <input
              value={assignto}
              onChange={(e) => setAssignto(e.target.value)}
              className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='employee name'
              required
            />

          </div>


          <div>

            <h3 className='text-sm text-gray-300 mb-0.5'>
              Category
            </h3>

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='design, dev, etc.'
              required
            />

          </div>

        </div>


        <div className='w-[40%] flex flex-col items-start'>

          <h3 className='text-sm text-gray-300 mb-0.5'>
            Description
          </h3>

          <textarea
            value={taskDescription}
            onChange={(e) =>
              setTaskDescription(e.target.value)
            }
            className='w-full h-36 text-sm py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 resize-none'
            placeholder='Enter task description'
            required
          />

          <button
            type='submit'
            className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'
          >
            Create Task
          </button>

        </div>

      </form>

    </div>
  )
}

export default CreateTask