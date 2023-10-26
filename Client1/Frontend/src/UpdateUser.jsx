import React ,{useState,useEffect} from 'react'
import  {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios';

const UpdateUser = () => {
    const{id}=useParams();
    const[item,setItem]=useState();
    const[cost,setCost]=useState();
    const navigate=useNavigate();

    useEffect(()=>{ 
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result=>{console.log(result)
            setItem(result.data.item)
            setCost(result.data.cost)
           
        })
        .catch(err=>console.log(err))
    },[])

    const Update =(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id,{item,cost})
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

<form onSubmit={Update}>

<h2>Update Item</h2> 

<div className='mb-2'>

<label htmlFor="">Item Name</label>

<input type="text" placeholder='Enter Item' className="form-control" value={item}  onChange={(e)=>setItem(e.target.value)}/>

</ div>

<div className='mb-2'>

<label htmlFor="">Cost</label>

</div>

<input type="text" placeholder='Enter cost' className="form-control" value={cost}  onChange={(e)=>setCost(e.target.value)}/>

<div className='mb-2'>
</div>

<button className='btn btn-success'>Update</button>

</form>

</div>
</div>
</div>
  )
}

export default UpdateUser