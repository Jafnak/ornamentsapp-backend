const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "title":String,
        "description":String,
        "Price":String,
    }
)

let ornamentmodel = mongoose.model("ornanents",schema);
module.exports={ornamentmodel}