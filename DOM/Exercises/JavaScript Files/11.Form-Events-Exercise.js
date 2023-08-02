//Exercise completed in Udemy IDE and copied here

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const productName = product.value;
    const qtyValue = qty.value;
    const newGrocery = document.createElement('li');
    newGrocery.innerText = `${qtyValue} ${productName}`;
    list.append(newGrocery);
    product.value = '';
    qty.value = '';
})