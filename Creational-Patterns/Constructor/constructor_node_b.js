const Task = require('./Creational-Patterns/constructor_node_a') //we require from constructor_a
const Repo = require('./Creational-Patterns/Module-taskRepo') //our DB service

const task1 = new Task(Repo.get(1))

const task2 = new Task({ name: 'create a demo for modules' })
const task3 = new Task({name: 'create a demo for singletons'})
const task4 = new Task({ name: 'create a demo for prototypes' })


console.log(task1.complete())
console.log(task2.save())
console.log(task3.save())
console.log(task4.save())