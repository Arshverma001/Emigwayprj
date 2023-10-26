import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const[users,setUsers]=useState([{
        item:"Item",
        cost:"Cost"
        
    }])

    const handleDelete=(id)=>{
        // console.log(id)
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res=>{console.log(res)
            window.location.reload()
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{ 
        axios.get('http://localhost:3001')
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to='/create' className='btn btn-success'>Add Item</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ITEM</th>
                        <th>COST</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                           return <tr>
                                <td>{user.item}</td>
                                <td>{user.cost}</td>
                                <td>
                                <Link to={`/update/${user._id}`} className='btn btn-success'>Edit</Link>
                                    <button className='btn btn-danger' onClick={(e)=>handleDelete(user._id)}>Delete</button>
                                    </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>

    </div>
  )
}

export default Users