import { formatarData } from "./formatarData.js";

const produtos_container = document.querySelector(".produtos-container");
const produtos = [
  {
    nome: "banana",
    qts: 20,
    unidade_medida: "kilo",
    validade: "011025",
  },
  {
    nome: "tomate",
    qts: 8,
    unidade_medida: "kilo",
    validade: "150925",
  },
  {
    nome: "alface",
    qts: 14,
    unidade_medida: "unidade",
    validade: "130925",
  },
  {
    nome: "cenoura",
    qts: 18,
    unidade_medida: "kilo",
    validade: "011025",
  },
];

const selecionarProduto = (produto) => {
  localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
  window.location.href = "detalhes.html";
};

// listar os produtos
for (let i in produtos) {
  const { nome, qts, unidade_medida, validade } = produtos[i];
  const dataFormatada = formatarData(validade);
  let medida = unidade_medida === "kilo" ? "kg" : "Un";

  produtos_container.innerHTML += `
    <div class="produto-card">
              <img src="img/${nome}.jpg" alt="${nome}-img">
                <div class="produto-descricao">
                    <h3 class="produto-nome">${nome}</h3>
                    <p>Quantidade em estoque: ${qts}${medida}</p>
                    <p>Data de validade: ${dataFormatada}</p>
                </div>
                <div class="botao-adicionar">
                    <button>SELECIONAR</button>
                </div>
            </div>
  `;
}

const btn_adicionar = document.querySelectorAll(".botao-adicionar button");
btn_adicionar.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    selecionarProduto(produtos[index]);
  });
});
