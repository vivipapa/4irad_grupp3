// Load the express NPM module 
let express = require('express');

// Create a new express server, store in the variable app
let app = express();

// Point to a folder where we have static files
// (our frontend code)
app.use(express.static('www'));

// If no other route rule fulfilled then return index.html
app.get('*',(req,res)=>{
  res.sendFile(__dirname + '/www/index.html');
});

// Start the server
app.listen(3000, ()=>{
  console.log('Express app listening on port 3000!');
});