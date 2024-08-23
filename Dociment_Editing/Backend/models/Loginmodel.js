import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        default: null,
    },
    role: {
        type: String,
        default: "user",
        enum:["admin","user"],
    }
});
const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
