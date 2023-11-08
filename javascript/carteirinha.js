let envia = document.querySelector("#enviar");
envia.addEventListener('click', function () {
    let salvanome = document.getElementById('nome').value;
    let salvadata = document.getElementById('data_aniversario').value;
    let salvacor = document.getElementById('cor').value;

    localStorage.setItem("nomeperfil", salvanome);
    localStorage.setItem("datanas", salvadata);
    localStorage.setItem("corequipe", salvacor);
});

let carrega = document.querySelector("#carregar");

carrega.addEventListener('click', function() {
    document.querySelector("#name").innerHTML = localStorage.getItem("nomeperfil");
    document.querySelector("#nasceu").innerHTML = localStorage.getItem("datanas");
    
    let colore = localStorage.getItem("corequipe");
    document.querySelector(".carteirinha").style.backgroundColor = colore; 
});