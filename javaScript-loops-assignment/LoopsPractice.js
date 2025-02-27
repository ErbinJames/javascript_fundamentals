/*1. Multiplication Table Generator*/
let number = 5;

for (let i = 1; i <= 10; i++){
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}

/*2. Sum of First N Natural Numbers*/
let n = 10;
let sum = 0;

for (let i = 1; i<= n; i++){
    sum += i;
}
console.log(`The sum of the first ${n} numbers is: ${sum}`);

/*3. Array Elements Printer */
let arr = [3,6,12,8,13];

for (let i = 0; i < arr.length; i++){
    console.log(`Array Element:${arr[i]}`);
}

/*4. Pattern Printer */
for (let row = 1; row <= 5; row++){
    let stars = "";
    for (let col = 1; col <= row; col++){
        stars += "*";
    }
    console.log(stars);
}

/*5. Reverse Array Elements*/
let int = [1,3,5,7,9];
let reverse = [];

for (let i = int.length -1; i >= 0; i--) {
    reverse.push(int[i]);
}
for (let i = 0; i < reverse.length; i++) {
    console.log(`Reversed Element: ${reverse[i]}`);
}