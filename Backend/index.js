const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./connexion')
var cors = require('cors')

app.use(cors())

const postModel = require('./postModel');
const Contact = require('./postModel');

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// app.get('/', (rep,res) => {
//     res.json("hello abdou");
// });
//crud applications
app.post('/api/contact', async(req, res) =>{
    const {Prenom, Nom, Email, Message} = req.body
    try{
        const newPost = await Contact.create({Prenom, Nom, Email, Message});
        res.json(newPost)
        console.log("i am here")
    }catch(error){
        res.status(500).send(error)
    }
})
//getting all the data from db
app.get('/user', async(req, res) =>{
    try {
        const posts = await Contact.find()
        res.json(posts)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(3001, ()=>{
    console.log('The app is listening to the port: http://localhost:3001');
}) 
