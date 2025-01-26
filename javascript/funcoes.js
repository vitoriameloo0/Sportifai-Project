// Funções declarativas 

function validarSenhas() {
    const senha = document.getElementById('password').value;
    const confirmarSenha = document.getElementById('Confirmpassword').value;
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return false;
    }
    return true;
}


function trocarImagem() {
    console.log("Mudando para iconpisca.png");
    document.getElementById("logo").src = "imagens/iconpisca.png";
}

function voltaImagem() {
    console.log("Voltando para icon.png");
    document.getElementById("logo").src = "imagens/icon.png";
}

// Funcoes expressivas


const verificarCamposPreenchidosLogin = function() { // Função de validação dos campos obrigatórios do LOGIN
    const camposObrigatorios = [
        document.getElementById('email'),
        document.getElementById('password'),
    ];

    let camposVazios = camposObrigatorios.filter(campo => !campo.value.trim());

    if (camposVazios.length > 0) {
        alert('Por favor, preencha todos os campos obrigatórios.');
    } 
};

// Função de validação dos campos obrigatórios do Inscrever
const verificarCamposPreenchidosIncrever = function() {
    const camposObrigatorios = [
        document.getElementById('email'),
        document.getElementById('password'),
    ];

    let camposVazios = camposObrigatorios.filter(campo => !campo.value.trim());

    if (camposVazios.length > 0) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    } 
    return true;
};

// Arrow functions



const exibirSaudacao = () => {
    const primeiroNome = document.getElementById('firstname').value;
    const sobrenome = document.getElementById('lastname').value;
    
    alert(`Olá, ${primeiroNome} ${sobrenome}! Bem-vindo(a) ao Spotify.`);
};


// Função para validar as senhas e exibir a saudação se for válido
const validarEExibirSaudacao = () => {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!verificarCamposPreenchidosIncrever()) {
        return;
    }

    // Valida as senhas
    if (validarSenhas()) {
        // Coleta os dados do cliente
        const primeiroNome = document.getElementById('firstname').value;
        const sobrenome = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const celular = document.getElementById('number').value;
        const senha = document.getElementById('password').value;

        // Coleta o gênero selecionado
        let generoSelecionado = '';
        const generos = document.getElementsByName('gender');
        for (let i = 0; i < generos.length; i++) {
            if (generos[i].checked) {
                generoSelecionado = generos[i].nextElementSibling.innerText;
                break;
            }
        }

        // Coleta os interesses selecionados
        let interessesSelecionados = [];
        const interesses = document.querySelectorAll('input[type="checkbox"]:checked');
        for (let i = 0; i < interesses.length; i++) {
            interessesSelecionados.push(interesses[i].nextElementSibling.innerText);
        }

        // Armazena os dados do cliente em um objeto
        let cliente = {
            primeiroNome: primeiroNome,
            sobrenome: sobrenome,
            email: email,
            celular: celular,
            senha: senha,
            genero: generoSelecionado,
            interesses: interessesSelecionados
        };

        // Exibe a saudação
        exibirSaudacao();

        // Para depuração: visualizar no console os dados do cliente
        console.log(cliente);
       
    }    
};