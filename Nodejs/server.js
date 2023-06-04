const express = require ('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('<h1>welcome to sage </h1>');
});
app.get('/about',(req,res) => {
    res.send('POST request to the about page')
});
    app.listen(8000,()=>{
        console.log('server listening on port 8000...')
    });