/**
 * - We use the keyword New to construct a new obj
 * - it will then link that obj to the object prototype
 * - It will binds 'this' to the new object prototype
 * - it will return 'this'
 * - we create a constructor just by creating a task function
 */

/**

function objectName(param1, param2){
    this.param1 = param1
    this.param2 = param2
    this.toString = function(){
        return this.param1 + ' ' + this.param2
    } // <-- at the end of this line, it will return 'this'. We do not have to do this as the 'new' keyword will do this for us
}

 
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