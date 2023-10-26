import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
 const[item,setItem]=useState();
 const[cost,setCost]=useState();
 const navigate=useNavigate();

 const Submit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{item,cost})
    .then(result=>{
        navigate('/')
        console.log(result)
    })
    .catch(err=>console.log(err))
 }

  return (
    <div>
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
         <div className='w-50 bg-white rounded p-3'>

<form onSubmit={Submit}>

<h2>Add Item</h2> 

<div className='mb-2'>

<label htmlFor="">Item Name</label>

<input type="text" placeholder='Enter Item' className="form-control" onChange={(e)=>setItem(e.target.value)}/>

</ div>

<div className='mb-2'>

<label htmlFor="">Cost</label>

</div>

<input type="text" placeholder='Enter cost' className="form-control" onChange={(e)=>setCost(e.target.value)}/>

<div className='mb-2'>
</div>

<button className='btn btn-success'>Add</button>

</form>

</div>
</div>
</div>
  )
}

export default CreateUser