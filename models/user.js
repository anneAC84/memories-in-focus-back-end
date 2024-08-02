const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

userSchema.set('JSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.password
    }
})

module.exports = mongoose.model('User', userSchema)