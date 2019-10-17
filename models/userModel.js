var mongoose=require('mongoose');
var bcrypt= require('bcrypt');


 var userSchema=new mongoose.Schema(
     { 
     
        firstName: String,
        lastName:String,
        email:{
            type:String,
            unique:true,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true
        },
       
     });

     // hashing a password before saving it ot the database
     userSchema.pre('save',function(next){
         var user = this;
         bcrypt.hash(user.password,10, function(err,hash){
             if(err){
                 return next(err);
             }
             user.password=hash;
             next();
         })

     })
   
module.exports=mongoose.model('User',userSchema);

