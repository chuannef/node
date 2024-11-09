import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    city: String,
    role: String,
    age: Number
});

const User = mongoose.model('User', userSchema);
export default User;
