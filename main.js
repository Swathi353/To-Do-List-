
const inputElement = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

inputElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
})

function addTask() {
    const inputValue = inputElement.value.trim();
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        const liElement = document.createElement('li');
        liElement.textContent = inputElement.value;
        listContainer.appendChild(liElement);
        let spanElement = document.createElement('span');
        spanElement.textContent = '\u00d7';
        liElement.appendChild(spanElement);
    }
    inputElement.value = '';
    saveData();
}


listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();








