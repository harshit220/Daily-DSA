

// var x = 7;
// function getName(){
//     console.log("hello harsh")
// }

// getName();
// console.log(x);
// console.log(getName);


// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }



// function a(){
//     // console.log(b);
// c();
//     function c(){
//         console.log(b);
//     }
// }
// var b = 10;
// a();



//Closure:-

// function x(){
//     var a = 101;
//     function z(){
//         console.log(a);
//     }
//     z();
// }
// x();

// function x (){
//     var a = 900;
//     function y(){
//         var b = 500;
//         function z(){
//             console.log(a, b);
//         }
//         z();
//     }
//     y();
// }
// x();


//SetTimeOut:-
// function x(){
//     var a = 222;
//     setTimeout(function(){
//         console.log(a);
//     }, 4000);
//     console.log("SetTimeOut")
// }
// x();

// function x (){
//     for (var i = 1; i <=7; i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i)
//             }, i* 1000)
//             console.log("SetTimeOut")
//         }
//         close(i)
//     }
// }
// x();


//Closures (Data Hidden)

// function counter(){
//     var count = 0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1= counter();
// counter1()


//(Use Constructures)

// function Counter(){
//     var count = 0;
//     this.incrementCounter = function(){
//         count++;
//     console.log(count);
//     }
//     this.decrementCounter= function(){
//         count--;
//         console.log(count);
//     }
// }
// var counter1 = new Counter();

// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();



// Function Statement
function a(){
    console.log("a called");
}
a()

//Function Expression
var b = function(){
    console.log("b called")
}
b()

