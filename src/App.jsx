// import React,{useContext, useEffect, useState} from 'react'

// import Login from './components/Auth/login';
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';

// import AdminDashboard from './components/Dashboard/AdminDashboard';
// import { getLocalStorage, setLocalStorage } from './utils/localStorage';
// import { AuthContext } from './context/AuthProvider';
// const App = () => {
// // useEffect(() => {
// // setLocalStorage()
// // getLocalStorage()

  
// // }, )

// const [user, setUser] = useState(null)
// const [loggedInUserData, setLoggedInUserData] = useState(null)
// const [userData,setUserData]=useContext(AuthContext)

// // useEffect(() => {

// // if(authData){
// //   const loggedInUser=localStorage.getItem("loggedInUser")
// //   if(loggedInUser){
// //     setUser(loggedInUser.role)
// //   }
// // }
  
// // }, [authData])

// useEffect(() => {
//   const loggedInUser=localStorage.getItem("loggedInUser")
//   if(loggedInUser){
//    const userData=JSON.parse(loggedInUser)
//    setUser(userData.role)
//    setLoggedInUserData(userData.data)
//   }
//   },[])


// const handleLogin=(email,password)=>{
//   if(email=='admin@me.com'&& password=='123'){
//     setUser('admin')
//     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
//   }
//   else if(userData ){
//     const employee=userData.find((e)=>email==e.email && e.password==password )
//  if(employee){
//   setUser('employee')
//   setLoggedInUserData(employee)
//  localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
//  }
//   }else{
//     alert("Invalid Credentials")
//   }
// }

//   return (
//     <>
//       {!user?<Login handleLogin={handleLogin}/>:" "}
//       {/* {user=='admin'?<AdminDashboard/>:<EmployeeDashboard/>} */}
// {/* {!user ? null : user === "admin" ? (
//   <AdminDashboard />
// ) : user === "employee" ? (
//   <EmployeeDashboard data={loggedInUserData} />
// ) : null} */}

// { user == "admin" ? 
//   <AdminDashboard changeUser={setUser}/>
//  : (user == "employee" ? 
//   <EmployeeDashboard  changeUser={setUser} data={loggedInUserData} />
//  : null)}

//       {/* <EmployeeDashboard /> */}
//       {/* <AdminDashboard /> */}
      
//     </>
//   )
// }

// export default App


import React, { useContext, useEffect, useState } from 'react'

import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

import { AuthContext } from './context/AuthProvider'
import { updateLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {

    const loggedInUser = localStorage.getItem("loggedInUser")

    if (loggedInUser) {

      const data = JSON.parse(loggedInUser)

      setUser(data.role)

      if (data.data) {
        setLoggedInUserData(data.data)
      }
    }

  }, [])

  const handleLogin = (email, password) => {

    // ADMIN LOGIN
    if (
      email === "admin@me.com" &&
      password === "123"
    ) {

      setUser("admin")

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin"
        })
      )

      return
    }

    // EMPLOYEE LOGIN
    if (userData) {

      const employee = userData.find(
        (employee) =>
          employee.email === email &&
          employee.password === password
      )

      if (employee) {
        const role = employee.role || "employee"

        setUser(role)
        setLoggedInUserData(employee)

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role,
            data: employee
          })
        )

        return
      }
    }

    alert("Invalid Credentials")
  }

  const handleCreateAccount = (firstName, email, password) => {
    if (!userData) {
      return 'Account data is still loading. Please try again.'
    }

    const normalizedEmail = email.trim().toLowerCase()

    if (normalizedEmail === 'admin@me.com') {
      return 'This email is reserved for the admin account.'
    }

    if (
      userData.some(
        (employee) => employee.email.toLowerCase() === normalizedEmail
      )
    ) {
      return 'An account with this email already exists.'
    }

    const newEmployee = {
      id: Math.max(0, ...userData.map((employee) => employee.id)) + 1,
      firstName: firstName.trim(),
      email: normalizedEmail,
      password,
      role: "admin",
      taskCounts: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0
      },
      tasks: []
    }

    const updatedUserData = [...userData, newEmployee]

    setUserData(updatedUserData)
    updateLocalStorage(updatedUserData)
    setLoggedInUserData(newEmployee)
    setUser('admin')
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({
        role: 'admin',
        data: newEmployee
      })
    )

    return null
  }

  return (
    <>
      {!user && (
        <Login
          handleLogin={handleLogin}
          handleCreateAccount={handleCreateAccount}
        />
      )}

      {user === "admin" && (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      )}

      {user === "employee" && loggedInUserData && (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}
    </>
  )
}

export default App