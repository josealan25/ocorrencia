document.getElementById("alunoLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    fetch('/loginAluno', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Login bem-sucedido.') {
            window.location.href = `http://127.0.0.1:5500/View/aluno.html?email=${email}`;
        } else {
            alert("Credenciais inválidas. Por favor, tente novamente.");
        }
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error);
    });
});

document.getElementById("professorLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    fetch('/loginProfessor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cpf, senha })
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Login bem-sucedido.') {
            window.location.href = 'http://127.0.0.1:5500/View/professor.html';
        } else {
            alert("Credenciais inválidas. Por favor, tente novamente.");
        }
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error);
    });
});
