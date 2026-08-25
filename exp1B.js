const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
res.send('This is a get route method');
});
app.post('/',(req,res)=>{
res.send('This is a POST route method');
});
app.put('/',(req,res)=>{
res.send('This is a PUT route method');
});
app.delete('/',(req,res)=>{
res.send('This is a delete route method');
});
app.listen(port,()=>{
console.log(`server running at http://localhost:${port}`);
});
