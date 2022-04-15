/*VARIÁVEIS NOME*/
let userName = document.querySelector('#name')
let labelName = document.querySelector('#label-name')
let validName = false
/*VARIÁVEIS EMAIL*/
let userEmail = document.querySelector('#email')
let labelEmail = document.querySelector('#labell')
let validEmail = false
/*VARIÁVEIS SENHA*/
let userPassword = document.querySelector('#password')
let labelPassword = document.querySelector('#labelll')
let validPassword = false
/*VARIÁVEIS CONFIRMA SENHA*/
let userConfirm = document.querySelector('#confirm-password')
let labelConfirm = document.querySelector('#label-confirm')
let validConfirm = false
/*VARIÁVEIS MENSAGENS*/
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

/*VALIDAÇÃO NOME*/
userName.addEventListener('keyup', ()=>{
    if(userName.value.length <= 2){
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
        userName.setAttribute('style', 'border-color: red')
        validName = false
    }else{
        labelName.setAttribute('style', 'color: green')
        labelName.innerHTML = 'Nome'
        userName.setAttribute('style', 'border-color: green')
        validName = true
    }
})

/*VALIDAÇÃO EMAIL*/
userEmail.addEventListener('keyup', ()=>{
    if(userEmail.value.length <= 4){
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Email *Insira no mínimo 5 caracteres'
        userEmail.setAttribute('style', 'border-color: red')
        validEmail = false
    }else{
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email'
        userEmail.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

/*VALIDAÇÃO SENHA*/
userPassword.addEventListener('keyup', ()=>{
    if(userPassword.value.length <= 7){
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Senha *Insira no mínimo 8 caracteres'
        userPassword.setAttribute('style', 'border-color: red')
        validPassword = false
    }else{
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = 'Senha'
        userPassword.setAttribute('style', 'border-color: green')
        validPassword = true
    }
})

/*VALIDAÇÃO CONFIRMAR SENHA*/
userConfirm.addEventListener('keyup', ()=>{
    if(userConfirm.value != userPassword.value){
        labelConfirm.setAttribute('style', 'color: red')
        labelConfirm.innerHTML = 'Confirmar Senha *As senhas não conferem'
        userConfirm.setAttribute('style', 'border-color: red')
        validConfirm = false
    }else{
        labelConfirm.setAttribute('style', 'color: green')
        labelConfirm.innerHTML = 'Confirmar Senha'
        userConfirm.setAttribute('style', 'border-color: green')
        validConfirm = true
    }
})

/*FUNÇÃO CADASTRO*/
function cadastrar() {
    if(validName && validEmail && validPassword && validConfirm){
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.innerHTML = ''
        msgError.setAttribute('style', 'display: none')
    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'
        msgSuccess.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = ''
    }
}