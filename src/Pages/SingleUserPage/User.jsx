import React from 'react'
import './User.css'

 const  User = () => {
  return (
    <div className='userSection'>
      <div className="userTitleContainer">
         <h1 className="userTitle">Edit User</h1>
         <div className="userCreateButtn">Create</div>
      </div>
      <div className="userContainer">
         <div className="userShow"></div>
         <div className="userUpdate"></div>
      </div>
    </div>
  )
}
export default User