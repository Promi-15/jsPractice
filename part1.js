/*function celsiusFarenheit(x){
      let F = ((9/5)*x + 32)
      return F
}
let value = 96.5;
let result = celsiusFarenheit(value).toFixed(3)
console.log(result);

*/

/*
function vowelCount(x){
    let count =0 ;
      for(let i = 0 ; i< x.length ; i++)
      {

        if(x[i] === 'a' || x[i] === 'A' || x[i] === 'e' || x[i] === 'E' || x[i] === 'i' || x[i] === 'I' || x[i] === 'o' || x[i] === 'O' || x[i] === 'u' || x[i] === 'U' )

            {
                count++
            }
      }
      return count
}

let x = "Promi and Galib loves each other"
let result = vowelCount(x)
console.log(result);
*/


function LongWord(x){
  let z = x.split(' ')
  let maxi = z[0].length
   for(let i = 1 ; i < z.length ; i++){
           let a = z[i].length
          // maxi = Math.max(maxi,a)
          if(a > maxi){
            maxi = a
          }

   }
   for(let j = 0 ; j <= z.length ; j++)
   {
          if(z[j].length === maxi)
          {
              return z[j]
          }
   }
 
}
let x = "I am learning Programming to become a programmer"
let result = LongWord(x)
console.log(result);




// function Repeated(arr,num){
//     let count = 0
//         for (let i = 0 ; i< arr.length ; i++){
//             if(arr[i] === num){
//                 count ++
//             }
//         }
// return count
// }
// let arr = [5,6,11,12,98, 5]
// let num = 5
// let result = Repeated(arr,num)
// console.log(result);