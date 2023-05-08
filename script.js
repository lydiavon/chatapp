let messages = [
    {
        author: "Ding",
        message: "Hallo zusammen"
    },
    {
        author: "Dong",
        message: "Hallo zurueck"
    }
]

function updateMessages() {
    let nachrichtListe = document.getElementById("nachrichten")
    nachrichtListe.innerHTML = ""
    nachrichtenHTML = ""
    messages.forEach(message => {
        nachrichtenHTML += `<li class="messages">${message.message} - ${message.author}</li>`
    });
    nachrichtListe.innerHTML += nachrichtenHTML
}

function submitMessage() {
    message = document.getElementById("inputmessage").value 
    author = document.getElementById("inputauthor").value 
    if (author == "" || message == ""){
        return
    }

    messages.push({
        message: message,
        author: author
    })
    updateMessages()
    let eingabeFeld = document.getElementById("messages")
    eingabeFeld.value = ""
}

//document.getElementById("submitButton").onclick = submitMessage;