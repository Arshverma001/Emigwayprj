const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel=require('./Models/Users')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:arsh30301@arshapi.x1sxpov.mongodb.net/Database1')
.then(()=>{
    console.log('Database connected')
}).catch((error)=>{
    console.log(error)
})

app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id
    UserModel.findByIdAndUpdate({_id:id},{
        item:req.body.item,
        cost:req.body.cost
    })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.post("/createUser", (req, res) => {
    UserModel.create(req.body) 
    .then(users => res.json(users)) 
    .catch(err => res.json(err))
})


app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users)) 
    .catch(err => res.json(err))
})




app.listen(3001, () => {
  console.log(`Server is running`);
});