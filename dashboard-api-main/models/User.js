







const mongoose = require('mongoose');
const Schmea = mongoose.Schema;
const validator = require('validator');

// ```
//  "name":"abc",
//   "email": "abc@gmail.",
//   "password":"123"
// ```

const UserModel = new Schmea(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique:true,
        },
        password: {
            type: String,
            required: true
        },
    },{timestamps:true}
)

module.exports = mongoose.model('users', UserModel);