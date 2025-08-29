const zod = require('zod');

const createTodo = zod.object({
    title: zod.string().min(1, "Title cannot be empty"),
    description: zod.string().min(1, "Description cannot be empty"),
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo,
    updateTodo
}