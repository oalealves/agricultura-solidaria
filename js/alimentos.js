const usu_alimentos_container = document.querySelector(".usu-alimentos");
const usu_alimentos_lista = [
  { nome: "Banana", qts: 5, status: "Entregue", unidade_medida: "kilo" },
  { nome: "Banana", qts: 5, status: "Cancelado", unidade_medida: "kilo" },
  { nome: "Banana", qts: 5, status: "Pendente", unidade_medida: "kilo" },
];

for (let i in usu_alimentos_lista) {
  const { nome, qts, status, unidade_medida } = usu_alimentos_lista[i];
  let medida = unidade_medida === "kilo" ? "kg" : "Un";
  let cor_status;

  switch (status) {
    case "Entregue":
      cor_status = "green";
      break;
    case "Pendente":
      cor_status = "gray";
      break;
    case "Cancelado":
      cor_status = "red";
      break;
  }

  usu_alimentos_container.innerHTML += `
        <div class="alimentos-card">
            <h3>${nome}</h3>
            <p>Quantidade: <span>${qts}${medida}</span></p>
            <p>Status: <span style="color: ${cor_status}">${status}</span></p>
            <i
              class="fa-solid fa-circle-exclamation"
            >
              O comprovante foi enviado para seu email.
            </i>
          </div>
    `;
}
