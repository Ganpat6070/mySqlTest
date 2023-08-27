const express = require('express');
const routes = require('../src/routes/routing');

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(port, (err)=>{
    console.log('Server listening on port '+port)
});