const mongoose = require('mongoose');
const Model = mongoose.model('trips');

// Fixed thanks to Jacob DeMaris on the general discussions

// GET: /trips - lists all trips
const triplist = async (req, res) => {
    Model.find({}).then((trips) => {
        return res.status(200).json(trips);
        })
        .catch((err) => {
            return res.status(404).json(err);
        });
};
// GET: /trips/:tripcode - returns a single trip
const tripsFindByCode = async (req, res) => {
    Model.findOne({ 'code': req.params.tripCode }).then((trip) => {
        return res.status(200).json(trips);
    })
    .catch ((err) => {
        return res.status(404).json(err);
    });
};

module.exports = {
    triplist,
    tripsFindByCode
};