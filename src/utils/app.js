const express =  require('express');
const app =  express();
const cors  =  require('cors');
const cookieParser =  require('cookie-parser');
const dbconnection = require('../db/database');
app.use(cors({
    origin:process.env.CORSE_ORIGIN,
    credentials:true,
}))

app.use(express.json({
    limit:"16kb",
}))

app.use(express.urlencoded(
    extended=true,
))

app.use(cookieParser());

dbconnection