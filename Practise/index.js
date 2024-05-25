

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
//     var a = 9;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

function x (){
    var a = 900;
    function y(){
        var b = 500;
        function z(){
            console.log(a, b);
        }
        z();
    }
    y();
}
x();
