// function calculateMoney(ticketSale) {

//     if(ticketSale<0){
//     return "Invalid Number";
//     }
   
    
//     let total = ticketSale*120 ;
//     let MoneyLeft = total-(500+(8*50))
    
//     return MoneyLeft ;
 
//      }
 
 
     
//  function checkName(name){
//      if(typeof name !== "string"){
//          return " Invalid ";
//      }
 
//      let letter  = name[name.length-1]
//      LowerLetter = letter.toLowerCase();
     
//      if(LowerLetter === 'a' || LowerLetter === 'e'||LowerLetter === 'i'||LowerLetter === 'o'||LowerLetter === 'u'||LowerLetter === 'y'||LowerLetter === 'w' ){
//          return "Good Name" ;
//      }
//      return "Bad Name" ;
//  }
 
 
 
//  function deleteInvalids(array) {
//   if( !Array.isArray(array)){
 
//      return "Invalid Array" ;
//   }
//   let array1=[];
//   for(let i =0 ; i<array.length;i++){
//      if(typeof array[i] === "number" && !isNaN(array[i]))
//           {
//              array1.push(array[i]);
//          }
         
//   }
//   return array1;
//      }
 
     
 
 
//     function password(obj) {
 
//      if(obj.birthYear){
//           birthStr =  obj.birthYear.toString();
//           if(birthStr.length !== 4){
//              return "Invalid"
//           }
//      }
//           if(!obj.name || !obj.siteName || !obj.birthYear )
//           return "Invalid" 
//            let site =obj.siteName.slice(1)
//            let firstChar = obj.siteName[0].toUpperCase();
//           let pass = firstChar+site+"#"+obj.name+"@"+obj.birthYear;
        
//         return pass;
//      }
     
 
 
 function monthlySavings(arr , livingCost) {
           let sum=0;
     if(  !Array.isArray(arr) && livingCost!='number'){
         return "Invalid input"
     }
     for(let i =0 ; i<arr.length;i++){
         if(arr[i]>=3000){
              sum = sum+arr[i]-(3000*.20);
         }
         else{
             sum = sum+arr[i];
         }
     }
     let savings = sum- livingCost;
         if(savings >= 0){
             return savings;
         }  
         return "earn more";
     }
 let result = monthlySavings(100, [ 900 , 2700 , 3400]);
 console.log(result);
     
 