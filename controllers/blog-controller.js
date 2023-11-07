import mongoose from "mongoose";
import Blog from "../model/Blog";

export const getallblogs = async (req, res, next) => {
    let blogs
    try {
        blogs = await Blog.find()
    } catch (error) {
        return console.log(error)
    }
    if (!blogs) {
        return res.status(404).json({ message: "blogs not found" })
    }
    return res.status(200).json({ blogs })
}
// add your blogs 
export const addblogs = async (req, res, next) => {
    const { title, description, image, user } = req.body
    const blog = new Blog({
        title,
        description,
        image,
        user
    })
    try {
        // const session  =  await mongoose.startSession();
        await blog.save()
        // you can use session in moongose uncomment those and see
        // session = await mongoose.startSession();
        // session.startTransaction();
        // await blog.save({ session: session });
        // existingUSer.blogs.push(blog)
        // await existingUSer.save({session})
        // await session.commitTransaction();

    } catch (error) {
        console.log(error)
        // return res.status(500).json({message:error})
    }
    return res.status(200).json({ blog })
}

export const updateblog = async (req, res, next) => {
    const { title, description } = req.body
    const blogID = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogID, {
            title,
            description
        })
    } catch (error) {
        return console.log(error)
    }
    if (!blog) {
        return res.status(404).json({ message: "unable to update the blog" })
    }
    return res.status(200).json({ message: "blog updated successfully" })
}

export const getByID = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id);
    } catch (error) {
        return console.log(error)
    }
    if (!blog) {
        return res.status(400).json({ message: "couldn't get the blog by id " })
    }
    return res.status(200).json({ blog })
}

export const deleteBlog = async(req,res,next)=>{
    const blogid = req.params.id;
    let deleteblog;
    try {
        deleteblog =  await Blog.findByIdAndDelete(blogid)    
    } catch (error) {
        return console.log(error)     
    }
    if(!deleteblog){
        return res.status(404).json({message:"unable to delete this blog data"})
    }
    return res.status(200).json({message:"blog deleted successfully"})
}
