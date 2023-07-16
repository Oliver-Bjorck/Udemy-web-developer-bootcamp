function collectEggs() {
    let totalEggs = 6; //variables defined within a function are coped to that function
    console.log(totalEggs);
}

//meaning they can't be accessed outside of the function they're defined in

let bird = 'Scarlet Macaw'; //global variables can be used inside and outside functions
function birdWatch() {
    let bird = 'Great Blue Heron'; //local variables can only be used inside a function and will overrule global variables within the function
}