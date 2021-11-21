import mongoose from "mongoose";

const Data = new mongoose.Schema({
    id:{type:Number, required: true},
    category:{type: String, required: true},
    brand:{type: String, required: true},
    model:{type: String, required: true},
    price:{type: String, required: true}
});

export default mongoose.model('Data', Data);
