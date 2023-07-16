const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay man to be elected to public office in California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const {email, firstName, lastName, city, bio} = user; //you can destructure objects similarly to arrays, however rather than order, it does so by name

const {born: birthYear, died: deathYear} = user; //you can change the name of the created variable as shown here

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const {state, died = 'N/A'} = user2; //you can also set default values for these newly created variables