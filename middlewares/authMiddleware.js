const {
signUp
}= require('../beans/common');

const userSignUp = async (req , res, next) =>{
    const body = req.body;
    try {
        const result = await signUp(body);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send(error) // it is used for validation error
    }

};
 module.exports = {
    userSignUp
 }