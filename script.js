const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write somthing');
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // input === valu and element === innerhtml 
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}


listContainer.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}


function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();