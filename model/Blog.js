import mongoose from "mongoose";
const {Schema} =mongoose;

const blogschema = new Schema({
    title:{
        type:"string",
        require:true
    },
    description:{
        type:"string",
        require:true

    },
    image:{
        type:"string",
        require:true
    },
    user:{
        type:"string",
        require:true
    }

})

const Blog = mongoose.model("Blog", blogschema)
Blog.createIndexes()
export default Blog;
