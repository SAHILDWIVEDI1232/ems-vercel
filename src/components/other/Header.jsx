// import React, { useState } from 'react'

// const Header = (props) => {
  
//   // const [username, setUsername] = useState('')
//   // if(!data){
//   //   setUsername('Admin')

//   // }else{
//   //   setUsername(data.firstName)
//   // }
// const logOutUser=()=>{
//   localStorage.setItem("loggedInUser",'')
//  props.changeUser("");
//   //window.location.reload()
// }

//   return (
//     <div className="flex items-end justify-between">
//       <h1 className='text-2xl text-white font-medium'>
//         Hello,
//         <br />
//         <span className='text-3xl text-white font-semibold '>username🙌</span>
//       </h1>

//       <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white py-3 px-5 rounded-sm'>Log out</button>
//     </div>
//   )
// }

// export default Header


import React from 'react'

const Header = ({ data, onLogout }) => {

  return (
    <div className="flex items-end justify-between">

      <h1 className='text-2xl text-white font-medium'>
        Hello,
        <br />

        <span className='text-3xl text-white font-semibold'>
          {data?.firstName || "Admin"} 🙌
        </span>

      </h1>

      <button
        onClick={onLogout}
        className='bg-red-600 text-lg font-medium text-white py-3 px-5 rounded-sm'
      >
        Log out
      </button>

    </div>
  )
}

export default Header