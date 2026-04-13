let form = document.getElementsByTagName('form')[0];
const button = form.querySelector('button');
// Task 1: Use DOM Manipulation to add another input element inside form, before the button.
// This input element will take the description of the fruit.
// Create an input element, give it id="description", type="text", and placeholder text like "Enter fruit description".
// Then insert it before the button inside the form.
const descInput = document.createElement('input');
descInput.type = 'text';
descInput.id = 'description';
descInput.placeholder = 'Enter fruit description';
form.insertBefore(descInput, button);

// add fruit to the cart
let fruititems = document.querySelector('.fruits');
let descriptionitems = document.querySelector('#description');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ensure that a description is provided
    let fruitDescription = document.getElementById('description').value.trim();
    if (fruitDescription === '') {
        alert('Please enter a description.');
        return;
    }
    const fruitName = document.getElementById('fruit-to-add').value.trim();
    // Task 2: Add code to show fruit name and description.
    // Create a new <li> element and add fruit name + description (in a <p> tag).
    // Show the description in italics.
    // Add a delete button at the end.
    // Append the new li element to the fruit list.
    const newLi = document.createElement('li');
    newLi.classList.add('fruit');
    newLi.innerHTML = '<span>'+fruitName +'</span>' + '<p style="font-style: italic;">' + fruitDescription + '</p>' + '<button class="delete-btn">x</button>';
    document.querySelector('.fruits').appendChild(newLi);
    // Clear input fields
    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});


// delete functionality
fruititems.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        let buttontodelete = event.target.parentElement;
        fruititems.removeChild(buttontodelete);
    }
});


// Task 3: Create a filter that shows only those fruits whose
// either name or description or both matches the entered text.

// HINT: Check both the fruit name and the description (<p> tag)
// If either includes the entered text, show it; otherwise, hide it.
const filter = document.getElementById('filter');

filter.addEventListener('keyup', function () {
    const textEntered = filter.value.toLowerCase().trim();
    const items = document.querySelectorAll('.fruit');

    items.forEach(function (item) {
        const name = item.querySelector('span').textContent.toLowerCase();

        const descElement = item.querySelector('p');
        const desc = descElement ? descElement.textContent.toLowerCase() : '';

        if (name.includes(textEntered) || desc.includes(textEntered)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});