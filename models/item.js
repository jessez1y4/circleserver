var mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var Image = new Schema({
	id: ObjectId,
	url: { type: String, required: true }
});

var Comment = new Schema({
	id: ObjectId,
	user_id: { type: ObjectId, ref: "User" },
	content: { type: String, required: true },
	time : { type : Date, default: Date.now }
})

var Item = new Schema({
	id: ObjectId,
	user_id: { type: ObjectId, ref: "User" },
	name: {type: String, required: true},
	description: {type: String},
	images: [Image],
	price: {type: Number, required: true},
	time : { type : Date, default: Date.now }
});
