const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.status(200).send("Server is running...")
})

app.get("/check",(req,res)=>{
    res.status(200).send("CI CD is running...")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000...")
})