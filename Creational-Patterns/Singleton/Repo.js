var Repo = function () {
    var called = 0 //we keep track of how many times the save function is called

    var saved = function (task) {
        called++
        console.log('Saving ' + task + ' called ' + called + ' times')
    }
    console.log('Newing up task repo')
    return {
        save: save
    }
}

module.exports = Repo() // we execute the function when we export so that we don't have to do it after requiring 