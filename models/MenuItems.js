const mongoose = require('mongoose');

const menuItemSchema = {
    name:{
        type : String,
        required : true
    },
    price: {
        type : String,
        required : true
    }, 
    taste : {
        type: String,
        enum: ["spicy", "sour", "sweet"],
        required : true
    },
    is_drink : {
        type: Boolean,
        default: false
    },
    ingredients : { 
        type: [String],
        default : []
    },
    num_sales:{
        type : Number,
        default: 0
    }
}


// Create menu item model
const MenuItems = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItems;