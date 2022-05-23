const express = require("express");
const {Activity} = require("./schemas/model");


exports.viewAll = (req, res) => {
    Activity.find().then((user) => {
        console.log("apare aici");
        console.log(user);
        res.json(user);
    });
};

exports.showTask = (req, res) => {
    Activity.findById({_id: req.params.id}).then((user) => {
        console.log("apare aici imaginea");
        console.log(user);
        res.render("showImages", {url:user.url});
    });

};


exports.updateTask = async (req, res) => {
    try {
        console.log(req.params.id);
        const id = req.params.id;
        const task = await Activity.findOneAndUpdate({_id: id}, req.body, {
            new: true,
            runValidators: true,
        })
        console.log("il gasesc "+task)
        if (!task) {
            return res.status(404).json({msg: 'No task with id : ${taskID}'})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}