 // JS LOOPS
 
 
 var i =0;names = ["Sumbul", "Jabeen","Muneeb"];


// ------ WHILE LOOP ---------

// while (i < names.length) {
//     console.log(names[i]);
//     i++;
//   }

// ------- FOR EACH ----------

// names.forEach(myFunction)

// function myFunction(arr) {
//     console.log(arr);
    
// }

// --- For Of -----


// for (i of names) {
//   console.log(i);
// }

// JS UTILITY FUNCTIONS

// pushes the elements at the end
names.push("Cricket","Tennis");
console.log(names);

// pushes the elements at the start
names.unshift("badminton");
console.log(names);

//removes the element from start

names.shift();

console.log(names);

// removes element from end of array
names.pop();

console.log(names);

// splice() slices the array and append in it. 3 param req, 1- index to start inserting 2- number of elements to remove 3- elements to add
names.splice(1,0,'Adeena','Ahmed'); // wont remove anything
console.log(names);

names.splice(1,2,'Aa','bb'); // will remove 2 and 3 indices and replace with the given values
console.log(names);

// ARRAY SORT
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]


// ARRAY IN ASC ORDER
var numbers = [4, 2, 5, 1, 3]; // a,b taking values based on merge sort algo
numbers.sort(function(a, b) {
    console.log(a,b);
    console.log(a-b);
  return a - b;
  
});
console.log(numbers);


// ARRAY IN DESC ORDER
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
console.log(points);
