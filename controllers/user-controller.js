import User from '../model/User';
import bcrypt from 'bcrypt';
const saltRounds = 10;


export const getallusers = async (req, res, next) => {
    let users;
    try {
        users = await User.find()
    } catch (error) {
        console.log(error)
    }
    if (!users) {
        return res.status(404).json({ message: "No users found" })
    }
    return res.status(200).json({ users })
}

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body
    let exitinguser;
    try {
        exitinguser = await User.findOne({ email })
    } catch (error) {
        return console.log("********erorr********", error)
    }
    if (exitinguser) {
        return res.status(400).json({ message: "user already exists !! Login instead " })
    }
    const hassedpassword = bcrypt.hashSync(password, saltRounds)
    const user = new User({
        name,
        email,
        password: hassedpassword,
    });
    try {
        await user.save()
    } catch (error) {
        return console.log(error)
    }
    return res.status(401).json({ user })
}

export const login = async (req,res,next)=>{
    const { name, email, password } = req.body
    let exitinguser;
    try {
        exitinguser = await User.findOne({ email })
    } catch (error) {
        return console.log("********erorr********", error)
    }
    if (!exitinguser) {
        return res.status(400).json({ message: "Couldn't find user in this email id" })
    }
    const ispasswordcorrect = bcrypt.compareSync(password, exitinguser.password);
    if(!ispasswordcorrect){
        return res.status(400).json({message:"Password is incorrect"})
    }
    return res.status(200).json({message:"Login successfully"})

}
