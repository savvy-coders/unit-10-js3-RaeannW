// JavaScript Coding Challenge

// 1. Create a function named 'createPerson' that returns an object named 'person' using object literal syntax. The object should have properties 'name' and 'age', with your name and age as the values.
function createPerson(){
    const person = {
        name: 'Rae Wiechens',
        age: 32,
      };
    return person;
}
createPerson();
console.log(createPerson());

// 2. Create a function 'logPersonProperties' that takes a 'person' object as an argument and returns the 'name' and 'age' properties of the 'person' object using dot notation.
const obj = {
    name: 'Rae Wiechens',
    age: 32,
 }

function logPersonProperties(person) {
    const personInfo = person.name + " " + person.age;
    console.log(personInfo);

    return personInfo;
}
logPersonProperties(obj);

// 3. Create a function 'modifyAge' that takes a 'person' object and a new age as arguments, modifies the 'age' property of the 'person' object to the new age, and returns the updated object.

function modifyAge(newAge, person) {
     person.age = newAge;
     //console.log(person);
     return person;
}
modifyAge(54, obj);
console.log(modifyAge(54, obj));

// 4. Create a function 'addJob' that takes a 'person' object and a job as arguments, adds a new property 'job' to the 'person' object with the job as its value, and returns the updated object.
function addJob(job, person) {
    person.job = job;
    //console.log(person);
    return person;
}
addJob('farmer', obj);
console.log(('farmer', obj));

// 5. Create a function 'deleteAge' that takes a 'person' object as an argument, deletes the 'age' property from the 'person' object, and returns the updated object.
function deleteAge(person) {
    delete person.age;
    return person;
}
deleteAge(obj);
console.log(deleteAge(obj));

// 6. Create a function 'addGreet' that takes a 'person' object as an argument, adds a method 'greet' to the 'person' object that returns a greeting message using the 'name' property, and calls the 'greet' method.
function addGreet(person) {
    person.greet = 'Hello ' + person.name;
   // console.log(person.greet);
    return person;
}
addGreet(obj);
console.log(addGreet(obj));

// 7. Create a function 'createNumbersArray' that returns an array named 'numbers' with five numbers of your choice.
const numbers = [2, 4, 6, 8, 10];
function createNumbersArray(){
 return numbers;
}
createNumbersArray();
console.log(createNumbersArray());

// 8. Create a function 'logFirstAndThird' that takes a 'numbers' array as an argument and returns the first and third elements of the 'numbers' array using their indices.
function logFirstAndThird(nums){
    const elements =  nums[0] + ', ' + nums[2];
    return elements;
}
logFirstAndThird(numbers);
console.log(logFirstAndThird(numbers));

// 9. Create a function 'modifySecond' that takes a 'numbers' array and a new number as arguments, modifies the second element of the 'numbers' array to the new number, and returns the updated array.
function modifySecond(newNum, nums){
    nums[1] = newNum;
    return nums;
}
modifySecond(45, numbers);
console.log(modifySecond(45, numbers));

// 10. Create a function 'logLength' that takes a 'numbers' array as an argument and returns its length.
function logLength(numbers){
 return numbers.length
}
logLength(numbers);
console.log(logLength(numbers));

// 11. Create a function 'iterateWithFor' that takes a 'numbers' array as an argument and uses a for loop to iterate over the 'numbers' array and return each element.
function iterateWithFor(nums){
    for (let i = 0; i < nums.length; i++){
        console.log(numbers[i]);
        }
    }

iterateWithFor(numbers);

// 12. Create a function 'iterateWithWhile' that takes a 'numbers' array as an argument and uses a while loop to iterate over the 'numbers' array and return each element.

function iterareWithWhile(nums){
    let i = 0;
    while (i < nums.length) {
        console.log(nums[i]);
        i++;
    }
}
iterareWithWhile(numbers);

// 13. Create a function 'iterateWithForOf' that takes a 'numbers' array as an argument and uses a for...of loop to iterate over the 'numbers' array and return each element.
function iterateWithForOf(nums){
    for (const nums of numbers){
        console.log(nums);
    }
}
iterateWithForOf(numbers);

// 14. Create a function 'createJSON' that takes a 'person' object as an argument, creates a JSON string named 'json' representing the 'person' object, and returns the JSON string.
function createJSON(person){
    const json = JSON.stringify(person);
    //console.log(typeof json);
    return json;
}
createJSON(obj);
console.log(createJSON(obj));

// 15. Create a function 'parseJSON' that takes a 'json' string as an argument, parses the 'json' string into a JavaScript object, and returns the object.

const json = '{"name":"John Doe","age":25,"email":"johndoe@example.com","isActive":true}';

function parseJSON(jsonString){
    const parsed = JSON.parse(jsonString);
    //console.log(typeof parsed);
    return parsed;
}
parseJSON(json);
console.log(parseJSON(json));

// 16. Create a function 'stringifyPerson' that takes a 'person' object as an argument, stringifies the 'person' object into a JSON string, and returns the string.
function stringifyPerson(person){
    const jsonString = JSON.stringify(person);
    //console.log(typeof jsonString);
    return jsonString;
}
stringifyPerson(obj);
console.log(stringifyPerson(obj));
