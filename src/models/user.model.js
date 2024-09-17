const mongoose =  require('mongoose');
require('dotenv').config();
const bcrypt  =  require('bcrypt');
const jwt =  require('jsonwebtoken');
const UserSchema = new mongoose.Schema(
    {
        username : {
            type:String,
            require:true,
            trim:true,
            lowercase:true,
            index:true,
        },
        email : {
            type:String,
            require:true,
            unique:true,
            trim:true,
            lowercase:true,
            index:true,
        },
        avatar: {
            type:String,
            require:true,
        },
        watchHistory:{
            type:mongoose.Schema.Types.ObjectId,
            ref : "Video",
        },
        password:{
            type:String,
            require:[true , "password is required"]
        },
        refreshToken:{
            type:String,
        }

    },
    {
        timestamps:true,
    }
)

UserSchema.pre('save' , async function(next){
    // password incryption
    if(this.isModified('password')){
        this.password =  await bcrypt.hash(this.password ,  10);
        next();
    }
    else{
        return next();
    }
});

UserSchema.methods.generateAccessToken =  function(){
    jwt.sign(
        {
            _id : this.id,
            username:this.username,
            email:this.email,
        },
        process.env.ACCESS_TOKEN_KEY,
        
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRE
        }
    )
}

UserSchema.methods.generateRefreshToken =  function(){
    jwt.sign(
        {
            _id : this.id,
        },
        process.env.REFRESH_TOKEN_KEY,
        
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRE 
        }
    )
}

UserSchema.methods.isPasswordCorrect =  async function(password){
    return await bcrypt.compare(this.password , password);
}

const User =  mongoose.model('User' , UserSchema);
module.exports = User;