
var mongoose = require("mongoose");
var users_schema = new mongoose.Schema({
    username: String,
    password: String,
    name: String, 
    age: String, 
    address: String, 
    marriage: String, 
    img: String, 
    sex: String, 
    identify: String
});
var User = mongoose.model("User", users_schema);

exports.User = User;

var tripDatas_schema = new mongoose.Schema({ userid: String,name: String, distance: String, data: String, time: String, startplace: String, endplace: String, costtime: String});
var tripData = mongoose.model("tripdata", tripDatas_schema);

exports.tripData = tripData;

var treals_schema = new mongoose.Schema({ title: String, introduce: String, img: String });
var treal = mongoose.model("treal", treals_schema);

exports.treal = treal;








