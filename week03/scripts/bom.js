
const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
      }
});

function setChapterList() {
    localStorage.setItem('myFavBomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBomList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// function displayList(item) {
//     if (input.value ) {
//         // create an li element
//         const li = document.createElement('li');

//         //create delete button
//         const deleteButton = document.createElement('button');

//         //populate the li elements textContent or innerHTML with the input value
//         li.textContent = input.value;

//         //populate the button textContent with a ❌
//         deleteButton.textContent = '❌';

//         //append the li element with the delete button
//         li.append(deleteButton);

//         //append the li element to the unordered list in your HTML
//         list.append(li);

//         //add an event listener to the delete button that removes the li element when clicked
//         deleteButton.addEventListener('click', () => {
//             list.removeChild(li);
//             clearInput();
//         });
//         input.focus();

//         input.value = '';

//     } else {
//          input.focus();
//     }

//     clearInput();
// }
function clearInput() {
    input.focus();
    input.value = '';
}

