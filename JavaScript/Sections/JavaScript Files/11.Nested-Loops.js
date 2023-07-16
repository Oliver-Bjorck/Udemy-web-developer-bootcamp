for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 1; j <= 3; j++) { //Nested loops allow you to run iterations within iterations
        console.log(`       j is: ${j}`); //For each iteration of the outer loop (i) the inner loop (j) runs through its constraints
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i <seatingChart.length; i++) { //Nested loops are needed to cycle through a nested array properly
    const row = seatingChart[i];
    console.log(`Row #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}