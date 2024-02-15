/**1
 * for(let i =0 ; i<=60 ; i++){
    console.log("I will invest at least 6 hours every single day for next 60 days ! ");
}


/// while
let j = 0 
while( j <= 60){
    console.log("I will invest at least 6 hours every single day for next 60 days ! ");
}


**/






 /**2 
console.log("odd numbers are " );
for(let i =61 ; i <=100 ; i++){
    
    if(i % 2 !== 0){
        console.log(i);
    }
}


/// while


let j = 61
while(j <= 100)
{
     if(j % 2 !== 0){
        console.log(j);
    }
    j++ ;
}

console.log(" even numbers are ");
for(let i =78 ; i <=98 ; i++){
  
    if(i % 2 === 0){
        console.log( i);
    }
}

/////while

let j = 78
while(j <= 98)
{
     if(j % 2 === 0){
        console.log(j);
    }
    j++ ;
}

*/




/**3
console.log("Sum of all odd numbers from 81 to 131");
let sum =0;
for(let i = 81; i <= 131 ; i++) {
    if(i % 2 !== 0){
       // console.log(i);
        sum += i ;
    }
}

console.log(sum);


////// while


console.log("Sum of all odd numbers from 81 to 131");
let sum =0;
let j = 81 ;
while(j <= 131 ) {
    if( j % 2 !== 0){
       // console.log(j);
        sum += j ;
    }
    j++;
}
console.log(sum);







console.log("Sum of all even numbers from 206 to 311");
let sum1 =0;
for(let i = 206; i <= 311 ; i++) {
    if(i % 2 === 0){
       // console.log(i);
        sum += i ;
    }
}

console.log(sum);




/////

console.log("Sum of all even numbers from 206 to 311");
let sum1 =0;
let j = 206 ;
while(j <= 311 ) {
    if( j % 2 === 0){
       // console.log(j);
        sum1 += j ;
    }
    j++;
}
console.log(sum1);

 */


/** 4
 * for(let i = 0 ; i <= 10 ; i++){
    m = 5 * i ;
    console.log( ` 5 * ${i} = ${m}`);
}

//////////////////
 let j = 0
 while( j <= 10)
 {
        m = 5 * j ;
    console.log( ` 5 * ${j} = ${m}`);
    j++ ;
 }
 */






// let counter = 21 ;


// function count(){
//   console.log(counter--);
//   if(counter  < 15){
//     clearInterval(countInterval);
//   }
  
//   }
//   const countInterval = setInterval(count,1000) ;


// for(let i = 21 ; i >= 15 ; i--){
   
//       setTimeout(()=> {
//         console.log(i);
//       },(21-i)*1000) 

// }

let i = 21;
while(i>=15){
    setTimeout((index)=> {
        console.log(index);
      },(21-i)*1000,i) ;

      i--;
}

