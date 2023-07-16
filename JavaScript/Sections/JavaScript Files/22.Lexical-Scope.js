function bankRobbery() {
    const heroes = ['Spider-man', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) { //with lexical scope, nested functions have access to the same variables as their parent functions
                console.log(`PLEASE HELP US ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}