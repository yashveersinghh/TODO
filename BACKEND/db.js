const mongoose = require('mongoose');
mongoose.connect(process.env.mongoDB);

const todoSchema = mongoose.Schema({
    title: string,
    description: string,
    completed: boolean,
})
const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}