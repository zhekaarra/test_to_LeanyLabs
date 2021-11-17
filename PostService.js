import Post from "./Post.js";

class PostService {
    async create(post){
        try {
            const createdPost = await Post.create(post);
            return createdPost;
        }catch (e){
            console.log(e.message);
        }
    };
    async getAll(){
        const posts = await Post.find();
        return posts;
    };

    async update(post){

        if (!post._id) {
            throw new  Error('Id not specified');
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
        return updatedPost;
    };
    async delete(id){

        if (!id) {
            throw new  Error('Id not specified');
        }
        const post = await Post.findByIdAndDelete(id);
        return post;

    };

}

export default new PostService();
