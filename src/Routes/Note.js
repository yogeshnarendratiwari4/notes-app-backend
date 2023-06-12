const express = require('express');
const router = express.Router();

const note = require('./../Models/Note');

// view
router.post("/view",async function(req,res){
    var notes = await note.find({userid : req.body.userid});
    res.json(notes);
});

// add 
router.post("/add",async function(req,res){
    // update
    await note.deleteOne({id:req.body.id});
    const newNote = new note({
        id: req.body.id,
        userid : req.body.userid,
        title : req.body.title,
        content : req.body.content
    });
    await newNote.save();
    res.json({message : "New note successfully created" + `id : ${req.body.id}`});
});

// delete
router.post("/delete",async function(req,res){
    // update
    await note.deleteOne({id:req.body.id});
    res.json({message : "New note successfully created" + `id : ${req.body.id}`});
});

module.exports = router;