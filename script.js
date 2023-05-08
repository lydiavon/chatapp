let messages = [
    {
        author: "Ding",
        message: "Hallo zusammen"
    },
    {
        author: "Dong",
        message: "Hallo zurck"
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

}

//document.getElementById("submitButton").onclick = submitMessage;