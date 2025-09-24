import { mostrarPerfilMenu } from "./mostrarPerfilMenu.js";

const header = document.querySelector("header");

header.innerHTML = `
  <img src="img/logotipo.png" alt="Logo do Projeto" class="logo" />
  <button class="toggle-menu">☰</button>
  <nav>
    <ul class="menu-lista">
      <li class="menu-item"><a href="index.html">Início</a></li>
      <div class="barra"></div>
      <li class="menu-item"><a href="produtos.html">Produtos</a></li>
      <div class="barra"></div>
      <li class="menu-item"><a href="suporte.html">Suporte</a></li>
    </ul>
  </nav>
  <div class="icone-login">
    <a><i class="fa-solid fa-user"></i></a>
    <div class="perfil">
      <ul>
        <li><a href="alimentos.html">Seus alimentos</a></li>
        <li><a href="doacoes.html">Suas doações</a></li>
        <li><a href="doar.html">Doar</a></li>
        <li>Sair</li>
      </ul>
    </div>
  </div>
`;

mostrarPerfilMenu();

const links = header.querySelectorAll(".menu-lista a");

if (links.length === 0) alert("não tem links");

const currentPage = window.location.pathname.split("/").pop();

links.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("actived-link");
  }
});

const toggle_menu = document.querySelector(".toggle-menu");
const menu = document.querySelector(".menu-lista");

toggle_menu.addEventListener("click", () => {
  menu.classList.toggle("active-menu");

  if (menu.classList.contains("active-menu")) {
    toggle_menu.textContent = "X";
  } else {
    toggle_menu.textContent = "☰";
  }
});
