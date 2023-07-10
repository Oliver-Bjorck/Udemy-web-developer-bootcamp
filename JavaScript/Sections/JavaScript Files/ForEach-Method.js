const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

numbers.forEach(function (el) { //forEach executes a provided function once for each element of an array
    if (el % 2 === 0) { //it's quite common to pass a fully defined function in the method
        console.log(el)
    }
})