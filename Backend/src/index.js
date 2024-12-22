require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cros = require("cros")
const app=express()

app.use(express.json())
app.use(cros())

app.get("/", (req,res) =>{
    return res.status(200).send({message : "Welcome guys", status:true})
})

module.exports=app;