var mongoose  = require('mongoose');
var jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    createdAt: {type:String, default: new Date().toISOString().substring(0, 10)},
    userName:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true,unique:true}
    
})




userSchema.methods.generateJwt = function () {
	return jwt.sign({
        _id     		: this._id,
        name            : this.userName,
        email          : this.email,
        expiresIn     :  Date.now()+86400000
	}, "mystoryline");
};

const user = mongoose.model('user',userSchema)



module.exports = {user}