## 1. Inventory Tracker

**Output:**
```
apple: 10
banana: 15
cherry: 5
date: 20
elderberry: 7
```

**Explanation:**
- In a for loop, it iterates through each index of the inventory array.
- For each fruit, it finds the corresponding count from `inventoryCount` using the same index.
- For example, `inventory[0]` is "apple", and `inventoryCount[0]` is 10, so it prints "apple: 10" and so on.

---

## 2. Alphabetical Sorting

**Output:**
```
[ 'apple', 'banana', 'cherry', 'mango', 'zebra' ]
```

**Explanation:**
- By using the Bubble Sort algorithm, it sorts an array of words in alphabetical order.
- The outer loop (`i`) iterates through each word in the array.
- The inner loop (`j`) checks the next words (`j = i + 1`) and compares them.
- For example, "zebra" comes before "apple", so they are swapped, and this process continues until the entire array is sorted.

---

## 3. Unique Array Builder

**Output:**
```
[
  8, 15, 2,  4,  3,
  1, 14, 5, 10, 12
]
```

**Explanation:**
- It generates an array of 10 unique random numbers between 1 and 20.
- First, an empty array `uniqueNumbers` is created.
- Then, a while loop runs until the array has 10 unique numbers.
- Inside the loop, a random number between 1 and 20 is generated, and a for loop checks if it already exists in the array. If the number is not found, it is added to `uniqueNumbers`. This process continues until 10 unique numbers are collected, and then the array is printed.

---

## 4. Triangle Checker

**Output:**
```
The sides 7, 10, and 5 form a valid triangle.
```

**Explanation:**
- It checks if three given side lengths can form a valid triangle using the Triangle Inequality Theorem. 
- Three side lengths (`sideA`, `sideB`, `sideC`) are defined, and an `if` condition checks whether the sum of any two sides is greater than the third (`sideA + sideB > sideC`, `sideB + sideC > sideA`, and `sideA + sideC > sideB`). If all conditions are true, the sides form a valid triangle; otherwise, they do not.


