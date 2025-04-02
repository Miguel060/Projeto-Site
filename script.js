const leftForm = document.querySelector('#leftForm');
const rightForm = document.querySelector('#rightForm');
const iName = document.querySelector('#name')
const iGenre = document.querySelector('#genre')
const iTel = document.querySelector('#tel')
const iEmail = document.querySelector('#email')
const iPassword = document.querySelector('#password')
const iEmailR = document.querySelector('#r_email')
const iPasswordR = document.querySelector('#r_password')


function limpar() {
    iName.value = ''
    iGenre.value = ''
    iTel.value = ''
    iEmail.value = ''
    iPassword.value = ''
}

function cadastrar() {
    fetch('http://localhost:8080/auth/cadastrar', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: iName.value,
            genero: iGenre.value,
            telefone: iTel.value,
            email: iEmail.value,
            senha: iPassword.value
        })
    })
        .then((response) => {
            console.log(response)
        })
        .catch((response) => {
            console.log(response)
        })
}

function login() {
    fetch('http://localhost:8080/auth/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            email: iEmailR.value,
            senha: iPasswordR.value
        })
    })
        .then((response)=>response.text())
        .then((response) => {
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
}

leftForm.addEventListener('submit', function (event) {
    event.preventDefault()
    cadastrar()
    limpar()
})

rightForm.addEventListener('submit', function (event) {
    event.preventDefault()
    login()
    limpar()
})



