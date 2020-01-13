const Task = require('./Task') //we require from constructor_a

const task1 = new Task('create a demo for constructor')
const task2 = new Task('create a demo for modules')
const task3 = new Task('create a demo for singletons')
const task4 = new Task('create a demo for prototypes')


console.log(task1.complete())
console.log(task2.save())
console.log(task3.save())
console.log(task4.save())