let gerarLink = document.querySelector("#gerar-link");
let keepLink;
let alerta = document.getElementById("alert");
let testar = document.querySelector("#testar-link");

gerarLink.addEventListener("click",function(e){
    e.preventDefault(); //Desativa o envio do formulário

    let tel = document.querySelector("#telefone");
    let msg = document.querySelector("#mensagem");
    let link = "https://wa.me/"+tel.value+"/?text="+msg.value;
    keepLink = link;
    testar.href = link;

    alerta.innerHTML = "Link Gerado"
    alerta.style.display = "block";
    setTimeout(function(){
        alerta.style.display = "none";
    }, 5000);
});

let copiarLink = document.querySelector("#copiar-link");
copiarLink.addEventListener("click", function(e){
    e.preventDefault();

    navigator.clipboard.writeText(keepLink).then(function(){
        alerta.innerHTML = "Link Copiado";
        alerta.style.display = "block";
        setTimeout(function(){
            alerta.style.display = "none";
        }, 5000);
    })
});
