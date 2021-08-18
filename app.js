require('dotenv').config();
var express = require('express')
var morgan = require('morgan');

const responseModel=require('./src/models/api/response');
const indexResponseModel=require("./src/models/api/index-response");
const statusResponseModel=require("./src/models/api/status-response");
const port=process.env.PORT;

var app = express();




app.use(morgan('tiny'));//logs request-endpoint and time taken
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', function (req, res) {
    const routers=[
          {
            method:"GET",
            path:"/",
            description:"api end points list"
          },
          {
            method:"GET",
            path:"/status",
            description:"check service health"
          }]
    res.status(200);
    res.json(indexResponseModel("OK",routers));
    res.end();
});

app.get('/status',(req,res)=>{
  res.status(200);
  res.json(statusResponseModel());
  res.end();
})




//no end points exist 
app.all('*',(req,res)=>{
  res.status(404);
  res.json(responseModel('failed',"no endpoint found",null));
})



app.listen(port,()=>console.log(`port ${port}  active`));