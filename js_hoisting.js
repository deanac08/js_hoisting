// 1
console.log(hello);                                   
var hello = 'world';                                 

// var hello;
//console.log(hello); logs undefined
// hello ='world;

// 2 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//var needle; gets hoisted
//test is not a function;


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan; var gets hoisted
//function print(){ function gets hoisted
    //var brendan; var declared within function
    //brendan='only okay'; assign value to brendan inside function
    //console.log(brendan); log as 'only okay'
//}
//console.log(brendan); global log 'super cool'

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food; gets hoisted
// eat is not a function
// function eat(){ hoist
    //var food; hoist
    // food ='half-chicken; assign value
    // food ='gone'; reassign value
    //console.log(food); log as 'gone'
// }

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// var mean; gets hoisted
// mean is not a function
// function mean(){ gets hoisted
    //var food; hoist
    // food ='chicken; assign value
    // console.log(food); log 'chicken'
    //food = 'fish';
    // console.log(food); log 'fish'
// }
//console.log(food); undefined

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre; gets hoisted
// console.log(genre); undefined
// rewind is not a function
//function rewind() gets hoisted
    //var genre; gets hoisted
    // genre='rock'; assign value
    // console.log(genre); log 'rock'
    //genre = 'r&b'; reassign value
    //console.log(genre); log 'r&b'
//genre ='disco'; assign global value
//console.log(genre); log 'disco'

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// var dojo; gets hoisted
// console.log(dojo); undefined
// learn is not a function
//function learn() gets hoisted
    //var dojo; gets hoisted
    // dojo='seattle'; assign value
    // console.log(dojo); log 'seattle'
    //dojo = 'burbank'; reassign value
    //console.log(dojo); log 'burbank'
//dojo ='san jose'; assign global value
//console.log(dojo); log 'san jose'
