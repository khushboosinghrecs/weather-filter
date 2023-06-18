const express = require('express');
const app = express();
const weather = require('./routes/weather')
const connectDB = require('./db/connect');
const url = 'mongodb://127.0.0.1:27017/weather';
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


app.use('/api', weather);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 4000;
const start = async()=>{
    try{
        await connectDB(url);
        app.listen(port, ()=>{
            console.log(`Server is listning on ${port}`)
        })
    }
    catch(err){
        console.log(err);
    }
}

start();