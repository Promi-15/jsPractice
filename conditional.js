


/*Free Drink
const taka = 500;
let burger ;
let coke;
if(burger>500){
    console.log("Free coke");
}
else{
    coke=30;
    console.log('Coke is ',coke);
}
*/




/* BMI 

const weight =50;
const height = 60;

let BMI = (weight/height**2);

if(BMI < 18.5){
    console.log("You are under weight");
}
else if(BMI>=18.5 && BMI<=24.9){
   console.log("You are Normal");
}
else if(BMI>=25 && BMI<=29.9){
    console.log("You are over Weight");
}
else{
    console.log("You are Obese");
}
*/



/* Grade


let marks = 90;
if(marks>=90 && marks<=100)
{
    console.log("A");
}
else if(marks>=80 && marks<=89){
    console.log("B");
}
else if(marks>=70 && marks<=79){
    console.log("C");
}
else if(marks>=60 && marks<=69){
    console.log(D);
}
else{
    console.log("F");
}

*/



/* Nested

let marks = 90;
let y= 50
if(marks>80){
    if(y>80){
        console.log("Go for lunch");
    }
    else if(y<80 && y>=60){
        console.log("Good Luck next Time");
    }
    else if(y<60 && y>=40){
        console.log("Msg unseen");
    }
    else{
        console.log("Block");
    }
}
else{
    console.log("Sleep");
}
*/

/* trenary

let num1=5;
let num2=6;

num1>num2 ? console.log(2*num1): console.log(num1+num2);

*/

let bus_fair = 800;
let age =50;
if(age<10){
    console.log("Free");
}
else if(age>10 && age<30){
     x=bus_fair - bus_fair*.50
    console.log(x);
}
else if(age>=60){
    x=bus_fair - bus_fair*.15
    console.log(x);
}
else{
 console.log("Regular fee ",bus_fair);
}