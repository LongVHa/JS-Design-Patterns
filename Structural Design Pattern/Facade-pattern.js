/*
:Used to provide a simplified interface for a complicates system
- This about the front of a building - Facade hides tha chaos from us, so all we have is a simplifed interface when wer're using an API or the application
- Think about Jquery, it sits on top of the DOM and provides us with a clean interface
- We're covering up and creating a better interface - we're not changing the existing codes
*/

var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.user;
    this.completed = data.completed;
}

var TaskService = function () {
    return {
        complete: function (task) {
            task.completed == true;
            console.log('Completing task: ' + task.name)
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on' + task.completedDate);
        },
        notifyCompletetion: function (task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name)
        },
        save: function (task) {
            console.log('Saving Task: ' + task.name)
        }
    }
}()

var myTask = new Task({
    name: 'My Task',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
})

//console.log(myTask)
TaskService.complete(myTask)
if (myTask.completed = true) {
    TaskService.setCompleteData(myTask);
    TaskService.notifyCompletetion(myTask, myTask.user);
    TaskService.save(myTask);
}

console.log(myTask)


/************** we create a facade  **************/

var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.user;
    this.completed = data.completed;
}

var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('Completing task: ' + task.name)
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on' + task.completedDate);
        },
        notifyCompletetion: function (task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name)
        },
        save: function (task) {
            console.log('Saving Task: ' + task.name)
        }
    }
}()

var TaskServiceWrapper = function () {

    var completeAndNotify = function (task) {
        TaskService.complete(myTask)
        if (myTask.completed == true) {
            TaskService.setCompleteData(myTask);
            TaskService.notifyCompletetion(myTask, myTask.user);
            TaskService.save(myTask);
        }
    }

    return {
        completeAndNotify: completeAndNotify
    }
}()

var myTask = new Task({
    name: 'My Task',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
})

TaskServiceWrapper.completeAndNotify(myTask)

console.log(myTask)

















