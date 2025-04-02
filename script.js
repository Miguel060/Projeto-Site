const leftForm = document.querySelector('#leftForm');
const iName = document.querySelector('#name')
const iGenre = document.querySelector('#genre')
const iTel = document.querySelector('#tel')
const iEmail = document.querySelector('#email')
const iPassword = document.querySelector('#password')

function limpar() {
    iName.value = ''
    iGenre.value = ''
    iTel.value = ''
    iEmail.value = ''
    iPassword.value = ''
}

function cadastrar() {
    fetch('http://localhost:8080/inicio/cadastro', {
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

function login(){
    fetch('http://localhost:8080/inicio/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "GET",
        body: JSON.stringify({
            email: iEmail.value,
            password: iPassword.value
        })
    })
        .then((response))
}

leftForm.addEventListener('submit', function (event) {
    event.preventDefault()
    cadastrar()
    limpar()
})

