//Array of Strings
var friends = ["Karin", "Katie", "Rachel", "Camay", "Brandon"]
console.log(friends);

//I am using the pop method to remove the last entry in my array.
//Line 9 will call out the last item.
//Line 10 will list the array without the last element.
console.log(friends.pop());
console.log(friends);

//Array of Numbers
var ages = [12, 13, 14, 15, 16]
console.log(ages);

//I am using slice to extract a range of elements within my array.
console.log(ages.slice(2, 5))

//Array of Booleans
var bools = [true, false, false, true]
console.log(bools)

//I am using push to add another value or element at the end of my array.
console.log(bools.push(true))
console.log(bools)

//Index positions
//Each of the arrays above has elements.
//The position of the element within in the array is called its index.
//The first element has an index position of 0.
//The index position of "Rachel" in the friends array is 2.
//The index position of 16 in the ages array is 4.
//The index position of the first false in the bools array is 1.
