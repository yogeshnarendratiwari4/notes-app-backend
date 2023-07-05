const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const note = require('./Models/Note');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);
const mongo_db_path = "mongodb+srv://yogesh:yogesh1234@cluster0.wtqzjnf.mongodb.net/NotesDB?retryWrites=true&w=majority";
mongoose.connect(mongo_db_path).then(
    function(){
        app.get("/",function(req,res){
            const response = {statusCode : res.statusCode,message : "API WORKING!"};
            res.send(response);
        });
        const noteRouter = require('./Routes/Note');
        app.use("/notes",noteRouter);
        
    }
);


const PORT = process.env.port || 4444 ;
app.listen(PORT,function(){
    console.log("Server started at port : "+PORT);
});