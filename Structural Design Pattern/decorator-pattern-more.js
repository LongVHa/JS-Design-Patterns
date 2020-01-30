/**
 * Here we try to create a subclass (or sub-obj)
 * 
 * We want to create a new obj that wrap the Task Obj and allows me to decorate it with my
 * notify and priority methods without changing Task Obj
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

//we create a sub obj to wrap Task
var urgentTask = function (name, priority) {
    //we call the Task constructor and pass in this name (the call doesn't include the complete() and save())
    Task.call(this, name)
    this.priority = priority
}

// we make a new Obj out of Task's prototype so both prototypes are not linked - which allows use to add methods to UrgentTask without it affecting Task
urgentTask.prototype = Object.create(Task.prototype)

urgentTask.notify = function () {
    console.log('Notify important people')
}

urgentTask.prototype.save = function () {
    this.notify()
    console.log('Do special stuff before saving')
    Task.prototype.save.call(this)
}

//now we have true sub-obj where constructor and prototypes are coming down to this new obj
var ut = new urgentTask('This is urgent', 1)
console.log(ut.complete())
