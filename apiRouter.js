const { application } = require("express");
const express = require("express");
const router = express.Router();
const Data = require("./dataModel");
const mongoose = require('mongoose');

router.get("/getdata", async (req, res) => {
  const datas = await Data.find();
  res.json(datas);
});

router.post("/setdata", async (req, res) => {
  const newData = new Data({
    name: req.query.name,
    content: req.query.content,
  });
  try {
    await newData.save();
    res.json({
        "name": req.query.name,
        "content": req.query.content,
        "message":"kaydedildi."
      });
  } catch (error) {
    res.json({
        "name": req.query.name,
        "content": req.query.content,
        "message":"basarisiz."
      });
  }
  
});

router.put("/putdata", async (req,res) =>{
    const dataID = mongoose.Types.ObjectId(req.query.id);
    try {
        const updatedData = await Data.findByIdAndUpdate({_id:dataID},{name:req.query.name,content:req.query.content},{new:true});
        console.log(updatedData);
        res.json({
            "message":"successful"
        });
    } catch (error) {
        res.json({
            "message":"your put request is failed."
        });
    }
});

router.delete("/deletedata",async (req,res) => {
    const deleteDataID = mongoose.Types.ObjectId(req.query.id);
    try {
        const deleteData = await Data.findByIdAndDelete(deleteDataID);
        res.json({
            "message":"successful"
        });
    } catch (error) {
        res.json({
            "message":"your delete request failed"
        })
    }
    
});




module.exports = router;
