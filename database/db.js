var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/voteDB',{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true);