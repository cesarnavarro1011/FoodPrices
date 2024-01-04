const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// import express from 'express';
// import dotenv  from 'dotenv';
// import cors  from 'cors';

dotenv.config();
const app = express();

const routerApi = require('./routers');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
});

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});
