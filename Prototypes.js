/*
We want to remove the Complete and Save functions and only attach it to the prototype - as opposed to having it inside the function.
Having it inside the function means that it is copied when the New keyword is used. Putting it on the prototypes mean all New keywords will
have access to it, but isn't created with it.

structure:
ClassName.prototype.methodName = function(arguments){
    //code
}
*/

const Task = function (name) {
    this.name = name
    this.completed = false

    /*
    we remove the below and added it to the prototype

    this.complete = function () {
        console.log('complete task:' + this.name)
        this.completed = true
    }

    this.save = function () {
        console.log('saving task: ' + this.name)
    }
    */
}

Task.prototype.complete = function () {
    console.log('complete task:' + this.name)
    this.completed = true
}

Task.prototype.save = function () {
    console.log('saving task: ' + this.name)
}

const task1 = new Task('create a demo for constructor')
const task2 = new Task('create a demo for modules')
const task3 = new Task('create a demo for singletons')
const task4 = new Task('create a demo for prototypes')


console.log(task1.complete())
console.log(task2.save())
console.log(task3.save())
console.log(task4.save())