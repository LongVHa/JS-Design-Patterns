/**
 * Insert the Task obj inside a node application
 */


const Task = function (name) {
    this.name = name
    this.completed = false
}

Task.prototype.complete = function () {
    console.log('complete task:' + this.name)
    this.completed = true
}

Task.prototype.save = function () {
    console.log('saving task: ' + this.name)
}

module.exports = Task //we export to constructor_b