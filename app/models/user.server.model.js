const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
    type: String,
    trim: true,
    required: true
    },


lastName: {
    type: String,
    trim: true,
    required: true
    },


email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true
    },


username: {
    type: String,
    trim: true,
    unique: true,
    required: true
    },

password: {
    type: String,
    required: true
    },

created: {
    type: Date,
    default: Date.now
    }
});
mongoose.model('User', UserSchema);