function saveNote () {
    var inputNote = document.getElementById("inputnote"),
        noteText = inputNote.value,
        list = document.getElementById("savednotes"),
        li = document.createElement("li");
    inputNote.value = "";
    li.innerHTML = noteText;
    list.appendChild(li);
}