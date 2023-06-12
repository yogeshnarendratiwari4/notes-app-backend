const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const note = require('./Models/Note');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);
mongoose.connect("mongodb+srv://yogesh:yogesh1234@cluster0.wtqzjnf.mongodb.net/NotesDB?retryWrites=true&w=majority").then(
    function(){
        app.get("/",function(req,res){
            res.send("This is home page");
        });
        const noteRouter = require('./Routes/Note');
        app.use("/notes",noteRouter);
        
    }
);


const port = process.env.port;
app.listen(post,function(){
    console.log("Server started at port : "+port);
});