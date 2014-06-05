var mongoose = require('mongoose'),
		bcrypt   = require('bcrypt-nodejs'),
		Schema   = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var Location = new Schema({
	id: ObjectId,

});

var userSchema = new Schema({
	// id        : ObjectId,
	name      : {type: String, required: true},
	items     : [{type: ObjectId, ref: 'Item'}],
	avatar_url: {type: String},

	locations: [Location],

	local: {
		email: String,
		password: String
	},

	facebook: {
		id: String,
		token: String,
		email: String
		// name: String
	}
	// password  : { type: String, required: true},
	// balance   : { type: Number, required: true, default: 10000 },
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', userSchema);
