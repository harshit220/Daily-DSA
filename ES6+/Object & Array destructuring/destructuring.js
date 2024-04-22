// ECMAScript
// European Computers Manufacturing Association
// TC-39
// ES

// 2015, ES2015, ES6.

// let
// block scope {}
// hoisting is not appricable on let.


function getName(){
    if(true){
        let name = 'sunny'
        console.log(name)
    }
}
getName()





// console.log(sum)
// let sum = function (x,y){
//     return x+y
// }




//const
//constant

const name2 = 'nurpul'
// name2 = 'home'
console.log(name2)

const name3 = ['shakti','rohan','kabir'];
name3[1] = 'rahul';
console.log(name3)






//var 
// Function scope {}
// Function declaration
function getName1(){
    if(true){
        var name1 = 'harshit'
    }
    console.log(name1)
}
getName1()


