import React from 'react'

const Application = () => {
  return (
  <>
  <h1>Job Application Form</h1>
  <h2>Section form</h2>
  <p>All fields are mandatory</p>
    <form>
      <div>
        <label htmlFor='name'>Name</label>
        <input
         type="text"
          id="name"
          placeholder='FullName'
          value="J Cole"
          onChange={()=>{}}/>
      </div>
      <div>
        <label htmlFor='bio'>Bio</label>
        <textarea id ="bio" name = "bio"/>
      </div>
      <div>
        <label htmlFor='job-location'>Name</label>
        <select id = "job-location">
          <option value=""> select a country</option>
          <option value="IN"> India</option>
          <option value="UK"> United Kingdom</option>
          <option value="US"> United States</option>
          <option value="CA"> Canada</option>
          <option value="AU"> Australia</option>
        </select>
      </div>
      <div>
        <label>
        <input type ="checkbox" id="terms"/> I agree to terms and conditions
        </label>
      </div>
      <button>Submit</button>
    </form>
  </>
  )
}

export default Application