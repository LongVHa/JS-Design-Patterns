/**
 * :Conserves memory by sharing portions of an object between objects.
 * : Only usful if you have large numbers of objects
 * 
 * Reason to use:
 * - Our tasks had lots of non unique data (If we have 5000 task, the string 'john' will be replicated 5000 times.)
 * - Flyweight share data across objects
 * - results in a smaller memory footprint
 */

var Task = function (data) {
    //we create the flyweight here with Project, Priority, User - if it exists, hand it to me, otherwise create a new one
    this.flyweight = flyweightFactory.get(data.project, data.priority, data.user, data.completed)

    this.name = data.name; //only the name is unique here - every other properties can become a flyweight
    // this.priority = data.priority;
    // this.project = data.user;
    // this.completed = data.completed;
}

//we remove the above data.etc below to this.etc (this dot)

function flyweight(project, priority, user, completed) {
    this.priority = priority
    this.project = project
    this.user = user
    this.completed = completed
}


// we create a new flyweight and return a flyweight - we also put a count on it
var flyweightFactory = function () { 
    var flyweights = {} // collection obj
    
    //here we ask for a flyweight - which is a subset of the Task obj
    // we create a get function which will get all of the things that isnt unique to the task
    var get = function (project, priority, user, completed) {

        //we check if it exists in the collection of flyweight - return if exists, otherwise create a new one
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project, priority, user, completed] = new flyweight(project, priority, user, completed)
        }
        return flyweights[project + priority + user + completed]
    }

    //we count the flyweights
    var getCount = function () {
        var count = 0
        for (var f in flyweights) count++
        return count
    }
    // we want to know how many flyweight there are - we return get and getcount
    return {
        get: get,
        getCount: getCount
    }
}()

function TaskCollection() {
    var tasks = {}
    var count = 0
    var add = function (data) {
        tasks[data.name] = new Task(data) // we create a new task and add it to the collection
        count++
    }
    var get = function (name) {
        return tasks[name] // the key is the name of the task
    }
    var getCount = function () {
        return count
    }
    return {
        add: add,
        get: get,
        getCount: getCount 
    }
}

var tasks = new TaskCollection()

var project = ['none', 'courses', 'training', 'project']// we have an array of different types of projects

var priorities = [1, 2, 3, 4, 5]
var users = ['Jon', 'Erica', 'Amanda', 'Nathan'] // users we might assign tasks to 
var completed = [true, false]


//get the current memory being used by our application
var initialMemory = process.memoryUsage().heapUsed


//we create 10k random tasks to test the memory amounts that is used
for (var i = 0; i < 10000; i++){
    tasks.add({
        name: 'task' + i,
        priority: priorities[Math.floor((Math.random() * 4))],
        project: project[Math.floor((Math.random() * 4))],
        user: user[Math.floor((Math.random() * 4))],
        completed: completed[Math.floor((Math.random() * 2))]
    })
}

// we pull in the memory amount after the 10k was created
var afterMemory = process.memoryUsage().heapUsed

console.log('user memory ' + (afterMemory - initialMemory) / 1000000)
console.log('tasks ' + tasks.getCount())
console.log('flyweights: ' + flyweightFactory.getCount())

