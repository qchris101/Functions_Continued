// ======================
// FUNCTIONS AS ARGUMENTS
// ======================

function callTwice(func) {
    func()
    func()
}

function callTenTimes(f){
    for (let i = 0; i < 10; i++){
        f()
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}
callTwice(rollDie)

// ====================
// RETURNING FUNCTIONS
// ====================

function makeMysteryFunc(){
    const rand = Math.random()
    if (rand > 0.5){
        return function(){
            console.log("Congrats you won money!")
        }
    }
        else {
            return function (){
                alert("Error not lucky!!!")
            }
        }
}

function makeBetweenFunc(min, max){
    return function(num){
        return num >= mind && num <= max
    }
}

