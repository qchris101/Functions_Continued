// ==============
// FUNCTION SCOPE
// ==============
let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

const bird = 'Scarlet Macaw';
function birdWatch() {
    const bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch()

// ==============
// BLOCK SCOPE
// ==============
// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!'
// }
// console.log(radius);
// console.log(msg)

// for (let i = 0; i < 5; i++) {
//     let msg = "ASKLDJAKLSJD";
//     console.log(msg)
// }
// console.log(msg)
// console.log(i)

// ==============
// LEXICAL SCOPE
// ==============

function bankRobbery(){
    const heros = ["Spiderman", "Thor", "Iron Man", "Groot"]
    function cryForHelp(){
        function inner(){
            for (let hero of heros) {
                console.log(`Please HELP us, ${hero.toUpperCase()}`)
            }
        }
        inner()
    }
    cryForHelp()
}