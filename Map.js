//1.Rolling Dice Problem
//Rolling Dice
function rollDice(){
    return Math.floor(Math.random()*10)%6+1;
}
//new Map
let a =new Map();

//Checking whether any value reached 10 or not
function checkCountTo10(a){
    for(let value of a.values()){
        if (value==10){
            return true;
        }
    }
    return false;
}
//Storing Result in Dictionary
let result = 0;
while(!checkCountTo10(a)){
    result = rollDice();
    if(a.has(result)){
        a.set(result,a.get(result)+1);
    }
    else{
        a.set(result,1);
    }
}
//Printing The Map
console.log(a)
//Get Max and Min valued Key
function checkMaxMin(a){
    let arr = []
    for(let value of a.values()){
        arr.push(value);
    }
    arr.sort((a, b)=>{return a - b});
    for (let [key, value] of  a.entries()) {
        if (value==arr[0]){
            console.log("Key Of Min value = "+ key);
        }
        else if(value == arr[arr.length-1]){
            console.log("Key Of Max value = "+ key);
        }
    }
}

checkMaxMin(a);





//2.Write a Program to generate a birth month of 50 individuals between the year 92 & 93. Find all the individuals having birthdays in the same month. Store it to finally print.
//Randomised Name
function makeName() {
    length = Math.floor(Math.random()*100)%8+5;
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//Randomised DOB
function makeDOB(){
    return Math.floor(Math.random()*100)%12+1;
}
//generate Person
function generatePerson(){
    return [makeDOB(),makeName()];
}
//new Map
let DOBToPersonMap = new Map();
//function to generate Map of Dob and array of Persons
function generateMap(){
    for(i = 0;i<50;i++){
        temp = generatePerson();
        if(DOBToPersonMap.has(temp[0])){
            DOBToPersonMap.get(temp[0]).push(temp[1]);
        }
        else{
            DOBToPersonMap.set(temp[0],[temp[1]]);
        }
    }
}

generateMap();
console.log(DOBToPersonMap);
