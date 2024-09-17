const express =  require('express');
const mongoose  =  require('mongoose');
require('dotenv').config();
// creating the fucntion for the data base connection 
const dbconnection =  async (req , res)=>{
    try{
        const db = mongoose.connect(process.env.MOGODB_URL)
        .then(()=> console.log("dbconnection successful"));
    }
    catch(error){
        console.log("dbconnection is not succcessful" , error);
        // this line of the code tell that the dbconnection is not  successfull
        
        process.exit(1);
    }
}
// thhjjbjkbj
module.exports =  dbconnection;