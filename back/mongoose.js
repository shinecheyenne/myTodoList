const mongoose = require('mongoose');

const mongooseConnection = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log(`mongodb connected`))
.catch(e=> console.log(`failed to connect mongodb`));

module.exports = mongooseConnection;