const handleOptions = (req , res, next)=>{

    res.setHeaders('Access Control Allow Origin', '*');
    res.setHeaders('Access Control All-method', 'GET,POST,PUT,OPTIONS');
    if (req.method ==='OPTIONS') {
        return res.sendStatus(200)   
     }
     
     return next();
}

module.exports ={
    handleOptions
}