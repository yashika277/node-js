import user from "../models/userModel.js"


export const create = async (req, res) => {
    try {
        const userData = new user(req.body)
        const { email } = userData;


        const userExist = await User.findone({ email })
        if (userExist) {
            return res.status(400).json({ message: "user already exist" })
        }

        const savedUser=await userData.save();
        res.status(200).json(savedUser);
    }
    catch (err) {
        res.status(500).json({ error: "internal server error" })
    }
}

export const fetch = async (req, res) => {
    try {
        
    }
    catch (err) {
        res.status(500).json({ error: "internal server error" })
    }
}