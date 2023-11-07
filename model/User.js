import mongoose from "mongoose";
const { Schema } = mongoose;

const Userschema = new Schema({
    name: {
        type: "string",
        require: true
    },
    email: {
        type: "string",
        require: true,
        unique: true
    },
    password: {
        type: "string",
        require: true,
        length: 6
    }
})

const User = mongoose.model("User",Userschema)
User.createIndexes()
// module.exports = User;
export default User;