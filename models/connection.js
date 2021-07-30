const mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
   };

//mongoose.connect('mongodb+srv://ophelia:Pa$$word@cluster0.mfjzw.mongodb.net/paloIT?retryWrites=true&w=majority',
mongoose.connect(process.env.MONGODB_URL,
    options,
        function(err){
            if (err){
                console.log('the error is : ' + err);
            } else{
                console.log('****** DATA BASE ACCESS : OK ******')
            }
            
        }
)

module.exports = mongoose