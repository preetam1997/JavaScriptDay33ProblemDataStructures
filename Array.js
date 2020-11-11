//1.a. Generate 10 random Numbers 
let a = Math.floor(Math.random()*10)%3;
let b = Math.floor(Math.random()*10)%3;
let c = Math.floor(Math.random()*10)%3;
let d = Math.floor(Math.random()*10)%3;
let e = Math.floor(Math.random()*10)%3;
let f = Math.floor(Math.random()*10)%3;
let g = Math.floor(Math.random()*10)%3;
let h = Math.floor(Math.random()*10)%3;
let i = Math.floor(Math.random()*10)%3;
let j = Math.floor(Math.random()*10)%3;
//1.b. Storing Them in array;
let arr = [a,b,c,d,e,f,g,h,i,j];
//1.c. Second Max and Second Min Without Sort
let maxArr = [...arr];
let max = Math.max.apply(null,maxArr);

arr.forEach(element => {
   if (element == max){
    maxArr[maxArr.indexOf(Math.max.apply(null,maxArr))] = -Infinity;
   }
});
console.log("max = "+Math.max.apply(null,maxArr));

let minArr = [...arr];
let min = Math.min.apply(null,minArr);

arr.forEach(element => {
   if (element == min){
    minArr[minArr.indexOf(Math.min.apply(null,minArr))] = Infinity;
   }
});

console.log("min = "+Math.min.apply(null,minArr));

//2. Second Max and Second Min With Sort
//second max
arr.sort();
let arr1 = arr.slice(0,arr.indexOf(arr[arr.length-1]));
console.log("max using sort = "+arr1[arr1.length-1]);
//second min
arr1 = arr.slice(arr.lastIndexOf(arr[0])+1);
console.log("min using sort = "+arr1[0]);

//3.Prime factorisation
n = 8*9;
function primeFactorisation(number){
    let arr = [];
    
    while (n % 2 == 0)  
    {  
        arr.push(2);  
        n = n/2;  
    }  
  
    for (i = 3; i*i <= n; i = i + 2)  
    {  
        while (n % i == 0)  
        {  
            arr.push(i);  
            n = n/i;  
        }  
    }  
    if (n > 2)  
        arr.push(n);
    return arr;
}

console.log(primeFactorisation(n));
//4. Write a Program to show Sum of three Integer adds to ZERO
const array1 = [ -7, 3, 4];
function reducer(accumulator, currentValue){ return accumulator + currentValue;}

console.log(array1.reduce(reducer));

//5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
let doubleArr = [];
function checkPalindrome(number){
    let copyNumber = number;
    let reversedNumber = 0;
    let currentNumber = 0;
    while(copyNumber!=0){
        currentNumber = Math.floor(copyNumber%10);
        reversedNumber = (reversedNumber*10) + currentNumber;
        copyNumber = Math.floor(copyNumber/10); 
    }
    return [number == reversedNumber,reversedNumber];
}

for (i = 0;i<=100;i++){
    if(checkPalindrome(i)[0]){
        doubleArr.push(checkPalindrome(i)[1])
    }
}
console.log(doubleArr.slice(10));
