var Repo = require('../Module-taskRepo')

const Task = function (data) {
    this.name = data.name
    this.completed = false
}

Task.prototype.complete = function () {
    console.log('complete task:' + this.name)
    this.completed = true
}

Task.prototype.save = function () {
    console.log('saving task: ' + this.name)
    Repo.save(this)
}

module.exports = Task //we export to constructor_b