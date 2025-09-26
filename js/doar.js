const select = document.querySelector("#doacao-alimento");
const submit_btn = document.querySelector("button");

// listar os alimentos
fetch("data/alimentos.json")
  .then((res) => res.json())
  .then((alimentos) => {
    alimentos.forEach((alimento) => {
      const option = document.createElement("option");
      option.value = alimento.toLowerCase();
      option.textContent = alimento;
      select.appendChild(option);
    });

    const otherOption = document.createElement("option");
    otherOption.value = "outro"
    otherOption.textContent = "Outro"
    select.appendChild(otherOption);
  });

// quando o usuario escolher um alimento fora da lista
select.addEventListener("change", () => {
  const label = document.querySelector("#label-alimento-novo");
  const input = document.querySelector("#doacao-alimento-novo");

  if (select.value === "outro") {
    label.removeAttribute("hidden");
    input.removeAttribute("hidden");
  } else {
    label.setAttribute("hidden", true);
    input.setAttribute("hidden", true);
  }
});

// quando enviar o formulario
submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Doação enviada! Agradecemos pela contribuição!");
  window.location.href = "doacoes.html";
});
