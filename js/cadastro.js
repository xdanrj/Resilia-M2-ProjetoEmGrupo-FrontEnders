// FUNÇÃO: Consulta a API viaCEP.
function fnConsultarEndereco(){
    cep = document.getElementById("inputCEP").value;
    url = `https://viacep.com.br/ws/${cep}/json/`;
    console.log(`LENGTH DO CEP: ${cep.length}`);
    console.log("value do cep zerado:");
    console.log(cep);

    // CONFERE: se o tamanho do CEP é diferente de 8 dígitos e não está vazio.
    // AÇÃO: Deixa o input vermelho.
    if(cep.length != 8 && cep){
        cep = document.getElementById("inputCEP").setAttribute("class", "form-control is-invalid");
    }
    else{
        cep = document.getElementById("inputCEP").setAttribute("class", "form-control");
        fetch(url).then(function(response){
            response.json().then(function(data){
                console.log(data);
                fnCompletarEndereco(data);
        })
})}
}

// FUNÇÃO: Preenche todos os inputs de endereço.
function fnCompletarEndereco(dados){
    // CONFERE: se o CEP não existe.
    // AÇÃO: Deixa o input vermelho.
    if(dados.erro){
        cep = document.getElementById("inputCEP").setAttribute("class", "form-control is-invalid");
    }
    
    // Declara os inputs de endereço como variáveis.
    else{
    let estado = document.querySelector("#inputEstado");
    let cidade = document.querySelector("#inputCidade");
    let bairro = document.querySelector("#inputBairro");
    let rua = document.querySelector("#inputRua");
    let numero = document.querySelector("#inputNumero");
    let complemento = document.querySelector("#inputComplemento");
    
    // Preenche os campos de endereço automaticamente.
    cidade.value = dados.localidade;
    bairro.value = dados.bairro;
    rua.value = dados.logradouro;
    estado.value = dados.uf;
    complemento.value = dados.complemento;
}}

// FUNÇÃO: Confere se os dois inputs de senha estão idênticos.
function fnConferirSenha(){
    senhaValue = document.getElementById("inputSenha").value;
    conferirSenhaValue = document.getElementById("inputConfirmarSenha").value;
    
    // CONFERE: se o input Senha e ConfirmarSenha são iguais e não estão vazios.
    if(senhaValue != conferirSenhaValue && senhaValue && conferirSenhaValue){
        console.log(senhaValue != conferirSenhaValue);
        document.getElementById("inputSenha").setAttribute("class", "form-control is-invalid");
        document.getElementById("inputConfirmarSenha").setAttribute("class", "form-control is-invalid");
    }
    else{
        document.getElementById("inputSenha").setAttribute("class", "form-control");
        document.getElementById("inputConfirmarSenha").setAttribute("class", "form-control");
    }
}
function enviarCadastro(){
    alert("Contato enviado com sucesso!");
}