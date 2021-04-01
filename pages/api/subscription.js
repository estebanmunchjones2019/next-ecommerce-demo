
export default function handler(req, res){
    //some code here to save the email to a database
    const email = req.body.email;
    return res.status(200).json({text: `${email} successfully subscribed`});
}