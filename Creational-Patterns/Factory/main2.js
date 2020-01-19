var Task = require('./task')

// Here we only need to require one file compared with main.js
var repoFactory = require('./repoFactory-wCache')


//create a new task
var task1 = new Task(repoFactory.getRepo('user').get(1))
var task2 = new Task(repoFactory.getRepo('user').get(2))


//add user and project to the task
var user = repoFactory.getRepo('user').get(1)
var project = repoFactory.getRepo('project').get(2)

task1.user = user
task2.project = project

console.log(task1)

//then we save it to the DB
task1.save()