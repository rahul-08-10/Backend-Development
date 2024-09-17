const express =  require('express');
const app =  express();
require('dotenv').config();
const port  = 4000
app.get('/' , (req ,res)=>{
    res.send('<h2>This is the backend code</h2>');
});

app.listen(process.env.PORT , ()=>{
    console.log('server is listening at port ' , port);
})