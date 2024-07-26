//Task 1
const myArray =["item1" , "item2" , "item3"];
console.log(myArray);


//Task 2
const numbers =[1,2,3,4,5];
let sum = 0;
for(let i=0; i<numbers.length;i++){
    sum +=numbers[i];
}
console.log("sum :" ,sum);


//Task 3
const items = ["pen" , "Book" , "Phone" , "Computer"];
const searchItem  = ["Book"];
if(searchItem  == "Book"){
    console.log("It's Founded:" ,searchItem);
}
else{
    console.log("It's Founded:" ,searchItem);
}


//Task 4
const fruits = ["Apple" , "Orange" ,"Mango"];
fruits[0] ="Banana";
fruits[1] ="Lemon"
fruits[2] ="Kiwi";
console.log(fruits);



//task 5
const colors = ["Red" , "Green" , "Blue" ,"Purple"];
colors.shift();
console.log(colors);


//Task 6
const numberS = [ 10, 25, 12, 7, 38];
let max =numberS[0];
let min =numberS[0];
for (let i = 1; i < numberS.length; i++) {
    if (numberS[i] > max) {
      max = numberS[i];
    }
    if (numberS[i] < min) {
      min = numberS[i];
    }
  }
console.log("MAX:",max);
console.log("MAX:",min);


//Task 7
const number =[10, 20, 30, 40, 50]
let sumNumbers =0;
for(let i=0; i<number.length;i++){
    sumNumbers +=number[i];
    average = sumNumbers/number.length;
}
console.log("Average:", average);


//Task 8
const numberss = [1, 2, 3, 4, 5];
let evenNumbers = [];
for(let i=0 ;i<numberss.length ;i++ ){
    if(numberss[i] % 2 === 0){
        evenNumbers.push(numberss)
    }
}
console.log("New Numbers :", evenNumbers);
