function toggleMenu() {
    const menu = document.getElementById('listaMenu');
    menu.classList.toggle('active');
}


function validarFormulario(event) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !assunto || !mensagem) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        event.preventDefault();
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        event.preventDefault();
        return false;
    }

    if (assunto.length > 100) {
        alert("O campo Assunto deve ter no máximo 100 caracteres.");
        event.preventDefault();
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMenu);
    }
});