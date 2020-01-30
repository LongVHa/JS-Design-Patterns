/**
 * Used to Add new functionality to an existing object, without being obtrusive
 * 
 * - We're going to create a new decorated (urgent) task that's not going to change the way our original task works
*/


var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completed task: ' + this.name)
}

Task.prototype.save = function () {
    console.log('saving task: ' + this.name)
}

var myTask = new Task('legacy task')
myTask.complete()
myTask.save()

var urgentTask = new Task('urgent task')
urgentTask.priority = 2
myTask.something = 'something'
urgentTask.notify = function () {
    console.log('Notify important people')
}
urgentTask.complete()
urgentTask.save()

//we enhance the save() in the prototype with notify function
//we use the call() to bind the two
urgentTask.save = function () {
    this.notify()
    Task.prototype.save.call(this)
}


// we do the same here
urgentTask.complete = function () {
    console.log('blah')
    Task.prototype.save.call(this)
}


urgentTask.complete()