var mongoose = require('mongoose');
var Schema= mongoose.Schema;


var userSchema = new mongoose.Schema(
    {

        titre: {
            type: String,
            require: true
        },
        description:  {
            type: String
        },
        participants:  { type: Number, default:0},
        choix: [{type:Number, default:0 },
            {type:Number, default:0 }],

        user: {type: Schema.Types.ObjectId, ref:'User'},
       
    });

module.exports = mongoose.model('Sujet', userSchema);

