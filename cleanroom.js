// Clean the room function: given an input of 
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
// sorted: [1, 1, 1, 1, 10, 2, 2, 2, 20, 20, 391, 392, 4, 5, 591]

/*  Heather Gray
    Clean the room function
    1/16/2019 */

const input_array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const sorted_array = input_array.sort();
// output array
const new_array = [];
// dictionary to hold count of repeated items in sorted_array
const dict = {}

// store array value and count of value in dictionary object
for (var i = 0; i < sorted_array.length; i++) {
    let current = sorted_array[i];
    console.log(sorted_array[i]);
    if (current in dict) {
        dict[current] += 1;
    }
    else {
        dict[current] = 1;
    }
}

// Iterate through dictionary and push items to array
for (var key in dict) {
    temp_array = []
    // if a number repeats, add it to a temp array
    if (dict[key] > 1) {
        for (var i = 0; i <= dict[key]; i++){
            temp_array.push(key);
        }
        // push the temp array into the main array
        new_array.push(temp_array);
    // otherwise simply push the item onto the main array
    } else { 
        new_array.push(key);
     }
}

console.dir(new_array);
