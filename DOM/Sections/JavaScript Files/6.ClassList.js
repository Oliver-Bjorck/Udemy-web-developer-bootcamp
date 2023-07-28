const h2 = document.querySelector('h2');

h2.setAttribute('class', 'purple'); //you can use JavaScript to set the class of an element with a pre-established css selector

h2.setAttribute('class', 'border'); //however if you set the class to something else, it will overwrite the previous

h2.classList.add('purple'); //classList allows you to assign multiple classes without having to worry about them being overwritten
h2.classList.add('border');

h2.classList.remove('border'); //you can also remove

h2.classList.toggle('purple'); //and toggle classes on or off