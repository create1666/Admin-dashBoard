import React from 'react'
import './NewProduct.css'

export const NewProduct = () => {
  return (
    <div className="newProduct">
          <h1 className='newUserTitle'>Edit</h1>
      <form  className="newUserForm">
        <div className="newUserItem">
          <label>Image</label>
          <input type="file"  id = 'file' className="newUserInput" placeholder='AceHACK' /> 
        </div>
        <div className="newUserItem"> 
          <label>Full Name</label>
          <input type="text" className="newUserInput" placeholder='bolu John' /> 
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" className="newUserInput" placeholder='create1666@ggmail.com' /> 
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" className="newUserInput" placeholder='password' /> 
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" className="newUserInput" placeholder='+234 81431 67565' /> 
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" className="newUserInput" placeholder='Lagos | Nigeria' /> 
        </div>
        <div className="newUserItem"></div>
          <label>Gender</label>
          <div className="newUserGender">
          <input type="radio" value='male' name='gender' id="male" /> 
          <label for='male'>Male</label>
          <input type="radio" value='female' name='gender' id="female" /> 
          <label for='female'>Female</label>
          <input type="radio" value='other' name='gender' id="other" /> 
          <label for='other'>Others</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className='newUserSelect' name='active' id="active" > 
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
            </select>
        </div>
        <button className='newUserBttn'>Create</button>
      </form>
    </div>
  )
}
