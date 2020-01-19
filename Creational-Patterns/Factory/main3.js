/*
This requires in repoFactory2
*/
var Task = require('./task')

// Here we only need to require one file compare with main.js
var repoFactory = require('/repoFactory2')


//create a new task
var task1 = new Task(repoFactory.getRepo('user').get(1))
var task2 = new Task(repoFactory.getRepo('user').get(2))


//add user and project to the task
var user = repoFactory.user.get(1)
var project = repoFactory.project.get(1)

task1.user = user
task2.project = project

//then we save it to the DB
task1.save()