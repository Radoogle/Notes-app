var inputNote = document.getElementById("inputnote"),
    list = document.getElementById("savednotes");

// read the old notes saved in local storage and display in a list
for (let i = 0; i < localStorage.length; i++) {
    let li = document.createElement("li"),
        key = localStorage.key(i);
    
    li.innerHTML = localStorage.getItem(key);
    list.appendChild(li);
}

function editButton () {
    if (list.childNodes.length > 1) {
        let nodes = document.getElementsByTagName("li");
        for (let node of nodes) {
            node.setAttribute("contenteditable", "true");
        }
    }
}

function saveButton () {
    if (list.childNodes.length > 1) {
        let nodes = document.getElementsByTagName("li");
        for (let node of nodes) {
            node.setAttribute("contenteditable", "false");
        }
    }
}

function saveNote () {
    let li = document.createElement("li"),
        noteText = inputNote.value;
    
    inputNote.value = "";
    li.innerHTML = noteText;
    list.appendChild(li);
    //const key = localStorage.length;
    // set the key to date+time in miliseconds so it's unique.
    const key = Date.now();
    const value = noteText;
    localStorage.setItem(key, value);
}

function clearLocalStorage () {
    if (list.childNodes.length > 1) {
            if (confirm("Are you sure you want to delete ALL the notes?")) {
                localStorage.clear();
                location.reload();
            }
        }
}