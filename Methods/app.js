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