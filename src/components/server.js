const express = require('express');
// const cors = require('cors');
// npm install --save-dev cors
const app = express();
// app.use(cors())
app.get('/about', (req, res) => {
  res.send('Welcome to Sage');
});
// 127.0.0.1:5000/contact
// app.get('/contact', (req, res) =>{
//   res.send('this is contact')
// })
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});