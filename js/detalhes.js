const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));
const image = document.querySelector(".itens-confirm img");
const heading = document.querySelector(".itens-confirm h2");

image.src = `img/${produto.nome}.jpg`;
heading.textContent = produto.nome;