// check if a number a prime number

const number = 14;

let factor = 0;

for(let i = 1; i <= number; i++){
    if(number % i === 0){
        factor++;
    }
}

if(factor == 2 ){
    console.log(`${number} is a prime number.`);
}
else{
    console.log(`${number} is not a prime number.`);
}