const User = require("../models/user")
exports.logPrint=(req,res)=> {
    return res.status(200).json({name:"working"})
    res.end()
}
exports.register=(req,res)=> {
    User.create(req.body, (error, data) => {
        if (error) {
          return(error);
        } else {
          return res.json(data);
        }  
       
    })
    var User = new require('mongodb')
db.collection('demo').findOne({'rollnumber':rollnumber})
 .then( res => {throw new Error('already exist');
})
}
