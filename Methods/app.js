const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

// The "Longer way" to code a function inside a object.
// const square = {               
//     area : function(side){
//         return (side * side)
//     },
    
//     perimeter : function(side){
//         return (side * 4)
//     }
// }

// The shorthand way to create a function inside of an object.
const square = {
    area(side){
        return (side * side)
    },
    
    perimeter(side){
        return (side * 4)
    }
}



const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;

// This keyword code practice:

// Define an object called hen.  It should have three properties:
// name should be set to 'Helen'
// eggCount should be set to 0
// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

const hen = {
    name : "Helen",
    eggCount: 0,
    layAnEgg(){
        this.eggCount++ // This is referring to the eggcount key already created in the hen object
        return "EGG"
    }
}

hen.name // "Helen"
hen.eggCount // 0
hen.layAnEgg() // "EGG"
hen.layAnEgg() // "EGG"
hen.eggCount // 2