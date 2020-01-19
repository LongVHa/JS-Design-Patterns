/**
 * This represent a database service
 */

var repo = function () {
    
    /* 
    This obj would represent the DB call - this is private.
    Only methods in the this function has access to this becos of closure.
    Any calling function won't have access.
    */
    var db = {} 

    function get(id) {
        console.log('Getting task ' + id)
        return {
            name: 'New task from db'
        }
    }

    function save(task) {
        console.log('Saving' + task.name + ' to the DB')
    }


    // returned obj with DB related methods
    return {
        get: get,
        save: save
    }
    

}
 
module.exports = repo(); //repo will represent the return section of our function