function lowest(x){
let low = x[0];
for(let j = 1 ; j < x.length ; j++){
    if(x[j] < low)
    low = x[j]
}
return low;
}

let x = [167, 190, 120, 165, 137];
let result = lowest(x)
console.log(result);