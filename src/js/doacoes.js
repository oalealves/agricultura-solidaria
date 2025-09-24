import { formatarData } from "./formatarData.js";

const doacoes = [
  {
    nome_alimento: "Banana",
    qts_alimento: 10,
    unidade_medida: "kilo",
    validade: "200925",
    criada_em: "180925",
  },
  {
    nome_alimento: "Couve",
    qts_alimento: 5,
    unidade_medida: "kilo",
    validade: "220925",
    criada_em: "180925",
  },

  {
    nome_alimento: "Repolho",
    qts_alimento: 5,
    unidade_medida: "kilo",
    validade: "201025",
    criada_em: "180925",
  },
  {
    nome_alimento: "Tomate",
    qts_alimento: 3,
    unidade_medida: "unidade",
    validade: "200925",
    criada_em: "180925",
  },
  {
    nome_alimento: "Limão",
    qts_alimento: 11,
    unidade_medida: "unidade",
    validade: "121025",
    criada_em: "180925",
  },
];
const doacoes_container = document.querySelector(".usu-doacoes");

doacoes.forEach((doacao, index) => {
  const { nome_alimento, qts_alimento, unidade_medida, validade, criada_em } =
    doacao;
  const validadeFormatada = formatarData(validade);
  const dataFormatada = formatarData(criada_em);
  let medida = unidade_medida === "kilo" ? "kg" : "Un";

  doacoes_container.innerHTML += `
        <div class="usu-doacoes-card">
            <span>${index + 1}</span>
            <h3>${nome_alimento}</h3>
            <hr />
            <p>Quantidade: ${qts_alimento}${medida}</p>
            <p>Data de validade: ${validadeFormatada}</p>
            <p>Doação feita em: ${dataFormatada}</p>
          </div>
    `;
});
