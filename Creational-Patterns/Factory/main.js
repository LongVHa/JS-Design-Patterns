var Task = require('./task')

//we will use the factory pattern to create the below required repo so that we dont have to manually add these
var taskRepo = require('./taskRepo')
var userRepo = require('./userRepo')
var projectRepo = require('./projectRepo')

//create a new task
var task1 = new task1(taskRepo.get(1))


//add user and project to the task
var user = userRepo.get(1)
var project = projectRepo.get(1)

task1.user = user
task2.project = project

console.log(task1)

//then we save it to the DB
task1.save()