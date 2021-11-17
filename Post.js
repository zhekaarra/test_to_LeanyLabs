import mongoose from "mongoose";

const Post = new mongoose.Schema({
    Category:{type: String, required: true},
    Brand:{type: String, required: true},
    Model:{type: String, required: true},
    Price:{type: String, required: true}

});

export default mongoose.model('Post', Post);
