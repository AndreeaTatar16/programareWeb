// Create schema for Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const activitySchema = new Schema({
    id: Number,
    week: String,
    titlu: String,
    continut: String,
    status: String,
    url: String
})
const ActivityModel =mongoose.model('activitySchema', activitySchema);
module.exports = {
    Activity:ActivityModel
}