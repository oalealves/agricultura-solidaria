export const mostrarPerfilMenu = () => {
  const icone_login = document.querySelector(".icone-login a");
  const icone_login_container = document.querySelector(".icone-login");
  const perfil_menu = document.querySelector(".perfil");

  icone_login.addEventListener("click", () => {
    perfil_menu.style.display = "block";
  });

  // se clicar fora, desaparece o menu
  document.addEventListener("click", (e) => {
    if (!icone_login_container.contains(e.target)) {
      perfil_menu.style.display = "none";
    }
  });
};
