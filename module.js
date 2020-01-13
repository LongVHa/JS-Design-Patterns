/**
 * MODULE PATTERN
 * In a simple is to encapsulate a group of like methods - like a toolbox
 * E.g. like a service - database call or HTTP calls
 * At it's core is basically a object literal
 * We only gonna have one of something - e.g. a module for a database call
 */

var Module = {
    method: function () {
        //code
    },
    nextMethod = function () {
        //code
    }
}


//we can wrap it in function
var Module = function() {
    var privateVariables = 'I am a private variable';

    return {
        method: function () {
            //code
        },
        nextMethod = function () {
            //code
        }
    }
 }