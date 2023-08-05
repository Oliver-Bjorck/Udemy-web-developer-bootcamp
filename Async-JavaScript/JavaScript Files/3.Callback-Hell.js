// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
};

delayedColorChange('red', 1000, () => { //this code runs exactly the same as the commented code above
    delayedColorChange('orange', 1000, () => { //we created a generic function that we can call back
        delayedColorChange('yellow', 1000, () => { //this allows us to run the same function repeatedly
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {

                })
            })
        })
    })
});

//this function being called doesn't exist, it's just to show an example
searchMobiesAPI('amadeus', () => {
    saveToMyDB(movies, () => { //in some scenarios we have multiple callbacks based on different results, for example
        //if it works, run this
    }, () => {
        //if it doesn't work run this
    });
}, () => {

}); //multiple callbacks such as this is often referred to as callback hell
//it can lead to very ugly and messy code with multiple callbacks and lots of nested code