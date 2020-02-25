var inputNote = document.getElementById("inputnote"),
    list = document.getElementById("savednotes");

for (let i = 0; i < localStorage.length; i++) {
    let li = document.createElement("li"),
        key = localStorage.key(i);
    
    li.innerHTML = localStorage.getItem(key);
    list.appendChild(li);
}



function saveNote () {
    let li = document.createElement("li"),
        noteText = inputNote.value;
    
    inputNote.value = "";
    li.innerHTML = noteText;
    list.appendChild(li);
    const key = localStorage.length;
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