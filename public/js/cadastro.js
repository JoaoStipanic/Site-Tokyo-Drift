var listaNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var listaEsp = ["!", "@", "#", "$", "%", "&", "*", "."];
var nomeInvalido = false;
var sobrenomeInvalido = false;
var emailInvalido = false;
var telefoneInvalido = false;
var cpfInvalido = false;
var senhaInvalido = false;

function info() {
    if (div_info.style.display = 'none') {
        div_info.style.display = 'block';
        
    }
}

function analisarNome() {
    var nome = input_nome.value;

    if (nome == '') { // Verifica se o sobrenome não é vazio
        nomeInvalido = true;

    } else if (nome.length <= 1) { // Verifica se o nome tem tamanho suficiente
        nomeInvalido = true;

    } else {
        nomeInvalido = false;
    }
    
    for (var i = 0; i < listaNum.length; i++) { // Percorre toda a lista de números
        if (nome.includes(listaNum[i])) {
            nomeInvalido = true; // marca como inválido, mas não sai do loop
        }
    }

    if (nomeInvalido) { // Exibe o resultado apenas uma vez no final
        span_nome.innerHTML = "Nome Inválido";

    } else {
        span_nome.innerHTML = "";
    }
}

function analisarSobrenome() {
    var sobrenome = input_sobrenome.value;

    if (sobrenome == '') { // Verifica se o sobrenome não é vazio
        sobrenomeInvalido = true;

    } else if (sobrenome.length <= 1) { // Verifica se o sobrenome tem tamanho suficiente
        sobrenomeInvalido = true;

    } else {
        sobrenomeInvalido = false;
    }

    for (var i = 0; i < listaNum.length; i++) { // Percorre toda a lista de números
        if (sobrenome.includes(listaNum[i])) {
            sobrenomeInvalido = true; // marca como inválido, mas não sai do loop
        }
    }

    
    if (sobrenomeInvalido) { // Exibe o resultado apenas uma vez no final
        span_sobrenome.innerHTML = "Sobrenome Inválido";
    } else {
        span_sobrenome.innerHTML = "";
    }
}

function analisarEmail() {
    var email = input_email.value;

    if (email == '') {
        emailInvalido = true;

    } else if (!email.includes('@')) {
        emailInvalido = true

    } else if (!email.includes('.')) {
        emailInvalido = true;

    } else {
        emailInvalido = false;
    }

    if (emailInvalido) {
        span_email.innerHTML = "E-mail Inválido";

    } else {
        span_email.innerHTML = "";
    }
}

function analisarTelefone() {
    var telefone = input_telefone.value;

    if (telefone == '') {
        telefoneInvalido = true;

    } else if (telefone.length < 11 ) {
        telefoneInvalido = true;

    } else {
        telefoneInvalido = false;
    }

    if (telefoneInvalido) {
        span_telefone.innerHTML = "Telefone Inválido";

    } else {
        span_telefone.innerHTML = "";
    }
}

function analisarCpf() {
    var cpf = input_cpf.value;

    if (cpf == '') {
        cpfInvalido = true;

    } else if (cpf.length != 11) {
        cpfInvalido = true;

    } else {
        cpfInvalido = false;
    }

    if (cpfInvalido) {
        span_cpf.innerHTML = "CPF Inválido";

    } else {
        span_cpf.innerHTML = "";
    }
}

function analisarSenha() {
    var senha = input_senha.value;
    var senhaTam = true;
    var senhaNum = true;
    var senhaEsp = true;

    if (senha == '') {
        senhaInvalido = true;

    } else if (senha.length < 8) {
        senhaTam = true;
    }

    for (var i = 0; i < listaNum.length; i++) {
        if (senha.includes(listaNum[i])) {
            span_num.innerHTML = "De"
        }
    }

    for (var i = 0; i < listaEsp.length; i++) {
        if (senha.includes(listaEsp[i])) {
            senhaEsp = false;
        }
    }

    if (senhaTam && senhaEsp && senhaNum) {
        senhaInvalido
    }
}