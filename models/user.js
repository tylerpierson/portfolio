const { model, Schema } = require('mongoose')


const userSchema = new Schema ({
    name: { required: true, type: String },
    email: { required: true, type: String },
    body: { required: true, type: String }
}, {
    timestamps: true
})

const User = model('User', userSchema)

module.exports = User