const express = require ('express');

const app = express();

app.get('/', (req,res) => res.send ('Hello world NodeJs App'))


app.listen (8080);
console.log ('Server on port 8080')
