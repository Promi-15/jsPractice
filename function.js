/*function multiply(a,b,c,d){

    let x = a * b * c * d ;
    return x ;
}
  
let result = multiply(2,5,3,9)

console.log(result);


*/


/*
function OddEven(a){
    let m ;
    if(a % 2 === 0){
        m = a / 2 ;
    }
    else {
        m =  a * 2;
    }
    return m;
}

let result = OddEven(5)
let result1 = OddEven(6)
console.log(result);
console.log(result1);

*/
/*

function avg(a){
    let sum = 0 ;
    for(let i = 0 ; i < a.length ; i++){
              sum = sum + a[i];
    }
    let average = sum / a.length ;
    return average ;
}
let x = [5,10,20,2,3]
let result = avg(x)
console.log(result);

*/





function OddEvvInt(x){
         
                if(x % 2 === 0){
                    return "Even" ;
                }
           
            return "Odd";
          }



let result = OddEvvInt(5)
console.log(result);


// function countZero(z){
//       let count = 0;
//     for ( let i =0 ; i<z.length ;i++){
//         if(z[i] === '0'){
//             count ++;
//         }
//     }
//     return count;

// }
// let x = "1010110000"
// let result = countZero(x)
// console.log(result);