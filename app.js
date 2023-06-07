const successPage = document.querySelector(".success-container")
const nwsPage = document.querySelector(".container")
const button = document.querySelector(".sub-button")

let inputBord = document.querySelector("#email")
let alertNotif = document.querySelector("#alert")

let sccssEmail = document.querySelector("#email-successed")

function success() {
    let blockedChars = `!#$%^&*()-=[];',_+{}:"<>?/|~`
    let atChar = "@"
    let input = inputBord.value

    for (let i = 0; i < blockedChars.length; i++) {
        if (input.includes(blockedChars.charAt(i))) {
            inputBord.style.border = "1px solid red"
            alertNotif.innerHTML = "Wrong Characters"
            break;
        } else if (!input.includes(atChar)) {
            inputBord.style.border = "1px solid red"
            alertNotif.innerHTML = "Not a valid email"
        } else {
            sccssEmail.innerHTML = inputBord.value
            nwsPage.style.display = "none"
            successPage.style.display = "flex"
        }
    }
}

function dismissed() {
    nwsPage.style.display = "flex"
    successPage.style.display = "none"
}