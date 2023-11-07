import express from "express";
import { getallblogs, updateblog, getByID, deleteBlog } from "../controllers/blog-controller";
import { addblogs } from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.get('/',getallblogs)
blogRouter.post('/addblogs',addblogs)
blogRouter.put('/update/:id',updateblog)
blogRouter.get('/:id',getByID)
blogRouter.delete('/:id', deleteBlog)

export default blogRouter