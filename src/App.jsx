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

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [userData] = useContext(AuthContext)

  useEffect(() => {

    const loggedInUser = localStorage.getItem("loggedInUser")

    if (loggedInUser) {

      const data = JSON.parse(loggedInUser)

      setUser(data.role)

      if (data.role === "employee") {
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

        setUser("employee")
        setLoggedInUserData(employee)

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            data: employee
          })
        )

        return
      }
    }

    alert("Invalid Credentials")
  }

  return (
    <>
      {!user && (
        <Login handleLogin={handleLogin} />
      )}

      {user === "admin" && (
        <AdminDashboard changeUser={setUser} />
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