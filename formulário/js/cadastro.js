    const formCadastro = document.getElementById('formCadastro');

    formCadastro.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const genero = document.getElementById('genero').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '' || genero === '' || dataNascimento.trim() === '') {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.textContent = 'Por favor, preencha todos os campos.';
        formCadastro.appendChild(errorElement);
    } else {
        // Enviar formulário ou realizar outras ações necessárias
        alert('Cadastro realizado com sucesso!');
        formCadastro.reset();
    }
    });