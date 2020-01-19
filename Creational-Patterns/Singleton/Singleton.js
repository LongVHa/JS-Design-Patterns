/**
 * Singleton is used to restrict an object to one instance of that object across the application
 * - Is an entity that remembers that last time you used it and hands back the same instance that you used before
 * - node js uses CommonJS pattern
 */

var TaskRepo = (function () {
    var taskRepo;
    //creates new repo obj and returns it
    function createRepo(){
        var taskRepo = new Object("Task")
        return taskRepo;
    }
    return {
        getInstance: function () { //call this to get new instance 
            if (!taskRepo) {//this checks to see if a taskRepo has been created, if not we create one
                taskRepo = createRepo();
            }
            return taskRepo
        }
    }
})()
 
var repo1 = TaskRepo.getInstance()
var repo2 = TaskRepo.getInstance()//this second call just returns the same instance as the first one

if (repo1 === repo2) {
    console.log("same TaskRepo")//this check to see if they are the same instance
}