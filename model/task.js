var mongoose = require('mongoose');
var taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    beginDate: {type: Date, required: true, default: Date.now},
    endDate: {type: Date, required: true},
    status: {type: String, required: true},
    tags: {type: [], required: true}
});
mongoose.model('Task', taskSchema);