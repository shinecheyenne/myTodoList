const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();
const routes = require('./src/routes');
const mongConnection = require('./mongoose');

const port = process.env.PORT ||5000;
const app = express();

const corsOption = {
    origin: '*',
    credentials: true
}

app.use(cors(corsOption));
app.use(logger('tiny'));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', routes);

app.use((req, res, next)=>{
    res.status(404).send(`${res.statusCode} Sorry, we can't find page`);
    next();
});

app.use((err, req, res, next)=>{ 
    console.error(err.stack);
    res.status(500).send("something is broken on server!");
    next();
});


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})

