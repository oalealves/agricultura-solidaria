const API_URL = "http://localhost:1337/api"

// Seleciona os botões
const botaoCadastro = document.querySelector('.cadastro .botao-cadastro input[value="Criar Conta"]')
const botaoLogin = document.querySelector('.cadastro .botao-cadastro input[value="Entrar"]')

// Função para cadastrar usuário
async function cadastrarUsuario() {
  const username = document.getElementById("usu-nome")?.value
  const email = document.getElementById("usu-email")?.value
  const password = document.getElementById("usu-senha")?.value

  if (!username || !email || !password) {
    alert("Preencha todos os campos!")
    return
  }

  try {
    const res = await fetch(`${API_URL}/auth/local/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    })

    const data = await res.json()
    console.log("Cadastro:", data)

    if (data.error) {
      alert("Erro no cadastro: " + data.error.message)
    } else {
      alert("Usuário cadastrado com sucesso!")
      window.location.href = "login.html" // redireciona pro login
    }
  } catch (err) {
    console.error("Erro:", err)
    alert("Erro ao cadastrar")
  }
}

// Função para login de usuário
async function loginUsuario() {
  const email = document.getElementById("usu-email")?.value
  const password = document.getElementById("usu-senha")?.value

  if (!email || !password) {
    alert("Preencha todos os campos!")
    return
  }

  try {
    const res = await fetch(`${API_URL}/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier: email, password })
    })

    const data = await res.json()
    console.log("Login:", data)

    if (data.jwt) {
      localStorage.setItem("token", data.jwt) // salva token
      localStorage.setItem("user", JSON.stringify(data.user)) // salva dados do usuário
      alert("Login realizado com sucesso!")
      window.location.href = "index.html" // redireciona para home
    } else {
      alert("Erro no login: " + data.error.message)
    }
  } catch (err) {
    console.error("Erro:", err)
    alert("Erro ao fazer login")
  }
}

// Liga eventos aos botões
if (botaoCadastro) {
  botaoCadastro.addEventListener("click", cadastrarUsuario)
}

if (botaoLogin) {
  botaoLogin.addEventListener("click", loginUsuario)
}