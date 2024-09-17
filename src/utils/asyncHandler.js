const { model } = require("mongoose")

const asyncHandler =(fn) => async (req , res )=>{
    try{
        await fn(req , res , next);
    }
    catch(error){
        res.status(error.code || 500).json(
            {
                success:false,
                message:error.message
            }
        )

    }
}

model.exports = asyncHandler;