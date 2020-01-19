/**
 * Factory pattern:
 * A pattern used to simplify object creation.
 * - helps with setup - caching / DB 
 * - Use for creating different objects based on need 
 * - Used for creating repositories (a repo factory that will pull in the neccessary repo so our controller doesnt have to worry about doing it)
 */


 /**
  * This is a simple repo factory with a getRepo function
  */
var repoFactory = function (repoType) {//takes in the the repository type

    this.getRepo = function () { //returns the correct type of repo
        if (repoType === 'task') {
            var taskRepo = require('./taskRepo.')()
            return taskRepo
        }

        if (repoType === 'user') {
            var userRepo = require('/usrRepo')()
            return userRepo
        }

        if (repoType === 'project') {
            var projectRepo = require('/projectRepo')()
            return projectRepo
        }
    }
}
 
module.exports = new repoFactory