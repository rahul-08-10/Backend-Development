const mongoose =  require('mongoose');
const aggregate =  require('mongoose-aggregate-paginate-v2');
const bcrypt  =  require('bcrypt');
const jwt =  require('jsonwebtoken');
const VideoSchema =  new mongoose.Schema({
    videoFile:{
        type:String,
        require:true,
    },
    thumbnail:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    Description:{
        type:String,
        require:true,
    },
    views:{
        types:Number,
        require:true,
    },
    isPublished:{
        type:Boolean,
        require:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true});

VideoSchema.plugin(aggregate);

const video  =  mongoose.model('video' , VideoSchema);
module.exports= video;