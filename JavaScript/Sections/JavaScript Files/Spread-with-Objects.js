const feline = {legs: 4, family: 'Felidae'};
const canine = {isFurry: true, family: 'Caninae'};

const catDog = {...feline, ...canine}; //Spread can also be used to copy objects over
//However if there is a conflict (in this case they both share a family property), then the last spread object will take precedence

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUSer = {...dataFromForm, id: 2345, isAdmin: false};
//Spread can be useful when copying information but needing to add more to it