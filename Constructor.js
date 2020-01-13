/**
 * we create a constructor just by creating a task function
 */

const task = function (name) {
    this.name = name
    this.completed = false

    this.complete = function () {
        console.log(obj)
        this.completed = true
    }

    this.save = function () {
        console.log('saving task: ' + this.name)
    }
}

const task1 = new task('create a demo for constructor')
const task2 = new task('create a demo for modules')
const task3 = new task('create a demo for singletons')
const task4 = new task('create a demo for prototypes')


task1.complete()
task2.save()
task3.save()
task4.save()