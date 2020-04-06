const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('todolist');
})

.get('/tasks-list', (req, res) => {
    res.render('todolist');
})

.get('/add-task', (req, res) => {
    res.render('addtask');
})

.get('/add-tag', (req, res) => {
    res.render('addtag')
})

.get('/edit-task/:id', (req, res) => {
    res.render('edittask')
})
module.exports = router;