// const dataObj = {
//     name: 'John',
//     priority: 1,
//     project: 'user',
//     completed: 'completed'
// }

// var Task = function ({ name, priority, project, completed }) {
//     // this.name = data.name;
//     // this.priority = data.priority;
//     // this.project = data.project;
//     // this.completed = data.completed;

//     const data = { name, priority, project, completed }

//     console.log(data )

// }

// Task( dataObj )


//********************** */
    
// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// }

// const { name, age, scores: { maths, science = 50 } } = student

// console.log(science)


// //*********************** */

// let country = 'Canada';
// let firstname = 'John';
// let lastname = 'Doe';

// const student = {
//     firstname: 'Glad',
//     lastname: 'Chinda',
//     country: 'Nigeria'
// };

// // Reassign firstname and lastname using destructuring
// // Enclose in a pair of parentheses, since this is an assignment expression
//     ({ firstname, lastname } = student )

// console.log(firstname, lastname, country)

/*********************** */


// const person = {
//     name: 'Name',
//     age: 12,
//     country: 'Canada',
//     nested: {
//         nest1: 'nest1',
//         nest2: 'nest2'
//     },
//     another: {
//         another1: 'another1',
//         another2: 'another2'
//     }
// }

// const { name, age, country, lastName = 'lastName', nested: { nest1, nest2 }, another: {another1, another2} } = person

// console.log(name, age, country, lastName, nest1, nest2, another1, another2)



/********************** ARRAYS*/

// const rgb = [255, 200, 0]

// const [red, green, blue] = rgb
// console.log(red, green, blue)



/****************  SWAP VARIABLES ***/
// let width = 300
// let height = 400
// const landscape = true

// console.log(width, height)

// if (landscape) {
//     //swap the variables
//     [width, height] = [height, width]

//     console.log(width, height)
// }



//*********************** nested array*/

const color = ['#ff00ff', [255, 0, 255], 'rgb(255, 0, 255)']

//use nested destructuring to assign red, green and blue

const [hex, [red, green, blue], string] = color
console.log(hex, red, green, blue, string)
