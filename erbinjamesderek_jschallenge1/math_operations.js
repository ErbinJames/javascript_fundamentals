/*Task 1: Calculate the Total Cost of Items */
let item1 = 100;
let item2 = 30;
let item3 = 250;

let total = item1 + item2+ item3;
console.log("The total cost of the items is: $" + total);

/*Task 2: Calculate the Average of Three Numbers */
let num1 = 95;
let num2 = 85;
let num3 = 87;

let ave = (num1 + num2 + num3) / 3;
console.log("The average is:", ave);

/*Task 3: Odd or Even Checker*/
let num = 8;
if (num % 2 == 0){
    console.log(num,"is an even number");
} else {
    console.log(num,"is an odd number");
}

/*Task 4: Calculate Discounts*/
let price = 130;
let less = 25;
let discount = (price * less) / 100;

let totalprice = price - discount;
console.log("The discounted price is: $" + totalprice);

/*Bonus Task (Optional): Reverse Percentage Calculation*/
let finalPrice = 80;
let discper = 20;
let originalPrice = finalPrice / (1-discper/100);
console.log("The original price before the discount was: $" + originalPrice);






