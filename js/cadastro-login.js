const API_URL = "https://db-strapi.onrender.com";

// Seleciona os botões
const botaoCadastro = document.querySelector('.cadastro .botao-cadastro input[value="Criar Conta"]');
const botaoLogin = document.querySelector('.cadastro .botao-cadastro input[value="Entrar"]');

// Função para cadastrar usuário
async function cadastrarUsuario() {
  const username = document.getElementById("usu-nome")?.value;
  const email = document.getElementById("usu-email")?.value;
  const password = document.getElementById("usu-senha")?.value;

  if (!username || !email || !password) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/api/auth/local/register`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    console.log("Cadastro:", data);

    if (res.ok) {
      alert("Usuário cadastrado com sucesso!");
      window.location.href = "login.html"; // redireciona para login
    } else {
      alert("Erro no cadastro: " + (data.error?.message || JSON.stringify(data)));
    }
  } catch (err) {
    console.error("Erro:", err);
    alert("Erro ao cadastrar. Verifique se o Strapi está rodando e o CORS está configurado.");
  }
}

// Função para login de usuário
async function loginUsuario() {
  const email = document.getElementById("usu-email")?.value;
  const password = document.getElementById("usu-senha")?.value;

  if (!email || !password) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/api/auth/local`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ identifier: email, password })
    });

    const data = await res.json();
    console.log("Login:", data);

    if (res.ok && data.jwt) {
      localStorage.setItem("token", data.jwt); // salva token
      localStorage.setItem("user", JSON.stringify(data.user)); // salva dados do usuário
      alert("Login realizado com sucesso!");
      window.location.href = "index.html"; // redireciona para home
    } else {
      alert("Erro no login: " + (data.error?.message || JSON.stringify(data)));
    }
  } catch (err) {
    console.error("Erro:", err);
    alert("Erro ao fazer login. Verifique se o Strapi está rodando e o CORS está configurado.");
  }
}

// Liga eventos aos botões
if (botaoCadastro) {
  botaoCadastro.addEventListener("click", cadastrarUsuario);
}

if (botaoLogin) {
  botaoLogin.addEventListener("click", loginUsuario);
}
