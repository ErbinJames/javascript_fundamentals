/*Task 1: Create and Use an Object*/
let book = {
    title : "Atomic Habits",
    author : "James Clear",
    pages : 320,
    isRead : true
}

console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);

console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);

book.isRead = true;
book.genre="Self-help";
console.log(book);

/*Task 2: Create and Modify an Array of Objects*/
let movies = [
    {
        title : "Heart of Stone",
        director : "Tom Harper",
        year : 2023
    },
    {
        title : "Bright",
        director : "David Ayer",
        year : 2017
    },
    {
        title : "Lift",
        director : "F. Gary Gray",
        year : 2024
    }
]
console.log(movies[1].title);

movies.push (
    {
        title : "Ride Along",
        director : "2014",
        year : 2014
    }
)

movies[0].year = 2023;
console.log(movies);

/*Task 3: Combine Objects and Arrays */
let student = {
    name : "Erbin James Derek A. Orodio",
    age : 22,
    subjects : ['Discrete Math', 'Programming', 'Information Security']
}
console.log(student.subjects[0]);
student.subjects.push('Foreign Language');
console.log(student);

/*Task 4: Challenge Task (Optional) */
let recipe = {
    name : "Spaghetti",
    ingredients : [
        {
            name: "spaghetti",
            quantity : "400 grams"
        },
        {
            name : "oil",
            quantity : "2 tbsp"
        },
        {
            name : "onion",
            quantity : "1 piece"
        },
        {
            name : "ground pork",
            quantity : "1/2 kilogram"
        },
        {
            name : "tomato sauce",
            quantity : "500 grams"
        },
        {
            name : "sugar",
            quantity : "1/2 cup"
        },
        {
            name : "tomato paste",
            quantity : "2 tbsp"
        },
        {
            name : "pork or beef broth cubes",
            quantity : "2 pieces"
        }
    ],
    isVegetarian : false
}
recipe.ingredients.push(
    {
        name : "pepper",
        quantity : "1/2 tsp"
    }
)
console.log(recipe.ingredients[1].name);
console.log(recipe);

