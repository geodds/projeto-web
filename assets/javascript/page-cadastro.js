const formulario = document.querySelector("form");
//inputs do formulario
const Iname = document.querySelector(".name");
const Ilogin = document.querySelector(".login");
const Iemail = document.querySelector(".email");
const Ipassword = document.querySelector(".password");

function cadastrar() {

    //endpoint para conectar com o back
    fetch("http://127.0.0.1:8080/usuarios",
        {
            headers: {
                'Accept': 'application/json',
                "Content-Type": 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: Iname.value,
                login: Ilogin.value,
                email: Iemail.value,
                senha: Ipassword.value
            }),
            mode: "cors"
        })
        .then(function (res) {console.log(res)})
        .catch(function (res) {console.log(res)})

}

//funcao que limpa os campos do formulario
function limpar () {
    Iname.value = "";
    Ilogin.value = "";
    Iemail.value = "";
    Ipassword.value = "";
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    cadastrar();
    limpar();
});

