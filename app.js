import express from 'express';
import mongoose from 'mongoose';
import config from 'config';

const app = express();


const db_URL = config.get('db_URL');
const PORT = config.get('PORT');


async function startApp(){
    try {
        await mongoose.connect(db_URL,  {useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT,()=>console.log("server was start on PORT" + PORT))
    }catch (e){
        console.log(e)
    }
}


startApp()
