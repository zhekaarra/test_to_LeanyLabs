import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import router from "./router.js";

const app = express();

app.use(express.json({extended: true}));
app.use('/api', router);

const db_URL = config.get('db_URL');
const PORT = config.get('PORT');
console.log(db_URL)

async function startApp(){
    try {
        await mongoose.connect(db_URL,  {useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT,()=>console.log("server was start on PORT" + PORT));
    }catch (e){
        console.log(e);
    }
}

startApp();
