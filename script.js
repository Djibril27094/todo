let addTodoButton = document.getElementById("addTodo")
let todoContainer = document.getElementById("todoContainer")
let inputFull = document.getElementById("inputFull")

addTodoButton.onclick = function() {
    // Verifier si l'input n'est pas vide
    if (inputFull.value != "") {
        // si l'input n'est pas vide créer un paragraphe
        var paragraph = document.createElement("p")
    }
    paragraph.innerText = inputFull.value
    paragraph.classList.add("paragraphe_style")
    
    // inserer le paragraphe dans l'element todo conainer 
    todoContainer.appendChild(paragraph)
    // Vider l'input après l'ajout
    inputFull.value = ""
}