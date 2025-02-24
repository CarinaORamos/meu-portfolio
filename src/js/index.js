const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
//Para pegar os elementos da classe projeto que NÃO tem a classe ativo
const projetosInativos = document.querySelectorAll ('.projeto:not(.ativo)');

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    })
}

function esconderBotao () {
    botaoMostrarProjetos.classList.add("remover");
}

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos ();
    esconderBotao();  
});