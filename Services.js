const express = require('express');

const app= express();
const router = express.Router();

const cors = require('cors');

app.use(express.json())

app.use(router);

app.use(cors());

app.get('/contactus',(req,res,next)=>{

   var d = new Date();
   var hour = d.getHours();
   var day= d.getDay();
     

      if (hour<9 && hour<17 && day<6)
       {res.send(false) }
       else {

        res.send(true)
       }
    
})

app.listen(3001, () => {

    console.log(" we are connected");
})


app.get('/home',(res,req,next)=>{

    console.log('kk') }
    
)
