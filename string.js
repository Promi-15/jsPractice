/*let x = 'promia';
let count =0;
for(let i = 0; i < x.length ; i++){
      if(x[i] === 'a'){
        count++
      }
     
}
console.log(count);
*/

/*
let x = 'Apromia';
let count =0;
for(let i = 0; i < x.length ; i++){
      if(x[i] === 'a' || x[i] === 'A'){
        count++
      }
     
}
console.log(count);

*/


/*
let x = 'abcde'
for(let i = 0 ; i < x.length ; i++){
    if(x[i] === 'a' ||  x[i] === 'e' ||  x[i] === 'i' ||  x[i] === 'o' || x[i] === 'u' ){
        console.log("Yes this string have",x[i]);
    }
}

*/

// function replace_x_with_y(input_string){
//     result = input_string.replace('x', 'y')
   
//     final = result.replace('X', 'Y')
//     return final;
// }



// let x = replace_x_with_y("This is an eXample string with X and x.")
// console.log(x);



let string = "Hi i am promi"
let temp = "";
for(let i = 0 ; i < string.length ; i++){
    if(string[i-1] === " " || i === 0)
    {
     temp+= string[i].toUpperCase();
    }
    else{
        temp += string[i];
    }
}
console.log(temp);
