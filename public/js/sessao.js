// sessão
function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function verificar(texto) {
    var spanErroLogin = document.getElementById("span_erro");
    if (texto) {
        spanErroLogin.innerHTML = texto;
    }
}