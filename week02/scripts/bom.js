
const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value ) {
        // create an li element
        const li = document.createElement('li');

        //create delete button
        const deleteButton = document.createElement('button');

        //populate the li elements textContent or innerHTML with the input value
        li.textContent = input.value;

        //populate the button textContent with a ❌
        deleteButton.textContent = '❌';

        //append the li element with the delete button
        li.append(deleteButton);

        //append the li element to the unordered list in your HTML
        list.append(li);

        //add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            clearInput();
        });
        input.focus();

        input.value = '';

    } else {
         input.focus()
    }

    clearInput();
});

function clearInput() {
    input.focus();
    input.value = '';
}
