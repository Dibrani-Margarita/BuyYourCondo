const Condo = require('../models/condo.models');

module.exports = {
    getCondos: (req, res) => {
        Condo.find({}) 
            .then((condos) => {
                res.status(201).json(condos);
            })
            .catch((err) => {
                console.log('ERROR IN GET ALL CONDOS', err);
                res.status(400).json({ message: 'Something went wrong in find all condos', error: err });
        });
    },
    getCondoById: (req, res) => {
        Condo.findOne({ _id: req.params.id })
            .then((condo) => {
                res.json(condo)
            })
            .catch((err) => {
                console.log("ERRORR IN GET ONE CONDO", err);
                res.status(400).json({ message: 'Something went wrong in find one condo', error: err});
            });
    },
    createCondo: (req, res) => {
        Condo.create(req.body)
        .then((newCondo) => {
            res
            .status(201)
            .json(newCondo);
        })
        .catch((err) => {
            console.log("ERROR IN GET CREATE CONDO", err);
            res
            .status(400)
            .json({ message: "Something went wrong in create condo", errors: err.errors });
        });
    },
    updateCondo: (req, res) => {
        Condo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((condo) => {
            res.json(condo);
        })
        .catch((err) => {
            console.log("ERROR IN GET UPDATE CONDO", err);
            res.status(400).json({ message: "Something went wrong in update condo", error: err });
        });
    },
    deleteCondo: (req, res) => {
        Condo.deleteOne({ _id: req.params.id })
        .then((condo) => {
            res.json(condo);
        })
        .catch((err) => {
            console.log("ERROR IN GET DELETE CONDO", err);
            res.status(400).json({ message: "something went wrong in delete condo", error: err });
        });
    }
};