/**
 * This is a simple repo factory with a getRepo function
 */
var repoFactory = function () {//takes in the the repository type

    this.getRepo = function (repoType) { //returns the correct type of repo
        if (repoType === 'task') {

            if (this.taskRepo) {
                console.log('from cache')
                return this.taskRepo
            } else {
                this.taskRepo = require('./taskRepo.')()
                // config --
                return this.taskRepo
            }
        }

        if (repoType === 'user') {
            var userRepo = require('/userRepo')()
            return userRepo
        }

        if (repoType === 'project') {
            var projectRepo = require('/projectRepo')()
            return projectRepo
        }
    }
}

module.exports = new repoFactory