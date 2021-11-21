import Data from "../model/Post.js";

class PostService {
    async create(post){
        try {
            const createdPost = await Data.create(post);
            return createdPost;
        }catch (e){
            console.log(e.message);
        }
    };
    async getAll(){
        const posts = await Data.find();
        return posts;
    };

    async update(post){
        if (!post._id) {
            throw new  Error('Id not specified');
        }
        const updatedPost = await Data.findByIdAndUpdate(post._id, post, {new: true});
        return updatedPost;
    };
    async delete(id){

        if (!id) {
            throw new  Error('Id not specified');
        }
        const post = await Data.findByIdAndDelete(id);
        return post;

    };

}

export default new PostService();
