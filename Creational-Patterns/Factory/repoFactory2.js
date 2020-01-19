var repoFactory = function () {
    var repos = this
    var repoList = [
        { name: 'task', source: './taskRepo' },
        { name: 'user', source: './userRepo' },
        { name: 'repo', source: './projectRepo' },
    ]

    //we loop through each item in the list and require in the source file
    repoList.forEach(function (repo) {
        repos[repo.name] = require(repo.source)()
    })
}

module.exports = new repoFactory