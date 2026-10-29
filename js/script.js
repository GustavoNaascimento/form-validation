const form = document.querySelector('.form')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const usuario = document.querySelector('#usuario')
const senha = document.querySelector('#senha')
const repitirSenha = document.querySelector('#repetir-senha')
const botao = document.querySelector('#btn-submit')
const btn_termos = document.querySelector('#termos')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

form.addEventListener('submit',(event) => {
    event.preventDefault()
    
    validationInputs()

    if(formIsValid() && btn_termos.checked) {
        botao.disabled = true
        setTimeout(() => form.submit(), 2000)
    }
})

// validação dos inputs
function validationInputs() {

    const [nomeValue, emailValue, usuarioValue, senhaValue, repitirSenhaValue] =
    [nome, email, usuario, senha, repitirSenha].map(input => input.value.trim())

    // nome validation
    if(nomeValue === '') {
        erroValidation(nome, 'Prencha o campo!')
    } else {
        successValidation(nome)
    }

    // email validation
    if(emailValue === '') {
        erroValidation(email, 'Prencha o campo!')
    }else if(!emailRegex.test(emailValue)) {
        erroValidation(email, 'Email invalido!, tente novamente')
    } else {
        successValidation(email)
    }

    // username validation 
    if(usuarioValue === '') {
        erroValidation(usuario, 'Prencha o campo!')
    } else {
        successValidation(usuario)
    }
    
    // senha validation 
    if(senhaValue === '') {
        erroValidation(senha, 'Prencha o campo!')
    } else if(senhaValue.length < 3 ) {
        erroValidation(senha, 'Sua senha deve ter pelo menos 3 caracteres!')
    } else {
        successValidation(senha)
    }

    // semha de confirmação validation
    if(repitirSenhaValue === '') {
        erroValidation(repitirSenha, 'Prencha o campo!')
    } else if(repitirSenhaValue != senhaValue) {
        erroValidation(repitirSenha, 'As senhas devem ser iguais!')
    } else {
        successValidation(repitirSenha)
    } 

}

// validacões de inputs 
function erroValidation(input, message) {
    const campoElement = input.parentNode
    const small = campoElement.querySelector('small')

    campoElement.classList.remove('success')
    campoElement.classList.add('error')
    small.textContent = message
}
function successValidation(input) {
    const campoElement = input.parentNode

    campoElement.classList.remove('error')
    campoElement.classList.add('success')
}

// função de envio do formulário
 function formIsValid() {
    const campos = form.querySelectorAll('.campo')
    return [...campos].every(campo => campo.classList.contains('success'))
// every método de array
 }