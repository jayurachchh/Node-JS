const express=  require('express');
const mongoose =require('mongoose');
const { findOne} = require('./Faculty');
const Faculty = require('./Faculty');
const bodyParser=require("body-parser");
const cors =require('cors')
mongoose.connect('mongodb+srv://Jayrachchh:jay@cluster0.z4brc6q.mongodb.net/Staffs?retryWrites=true&w=majority')
.then(()=>
{
    const app =express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(cors());
    // get all
    app.get('/faculty',async (req,res)=>
    {
    const data= await Faculty.find();
    res.send(data);
    })
    // get by id
    app.get('/faculty/:id',async(req,res)=>
    {
        const data= await Faculty.findOne({id:req.params.id});
        res.send(data);
    })
    // inseert 
    app.post('/faculty',async (req,res)=>
    {
        const f=new Faculty();
        f.id=req.body.id;
        f.FacultyName=req.body.fname;
        f.FacultyDesignation=req.body.fd;
        const data = await f.save();
        res.send(data);
    });
    //update 
    app.put('/faculty/:id',async(req,res)=>
    {
        const data= await Faculty.findOne({id:req.params.id})
        data.FacultyName=req.body.fname;
        data.FacultyDesignation=req.body.fd;
        await data.save();
        res.send(data);
    });
    // delete
    
    app.delete('/faculty/:id',async(req,res)=>
    {
        const data= await Faculty.deleteOne({id:req.params.id});
        res.send(data);
    })
    app.listen(3000,()=>
    {
        console.log("server started at 3000")
    })
}); 


