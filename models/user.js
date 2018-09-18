const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	password: String,
	roles: {
		type: String,
		enum: ['Boss', 'Developer', 'TA', 'Alumni'],
		// default: ''
	}
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

const User = mongoose.model('User', userSchema);
module.exports = User;