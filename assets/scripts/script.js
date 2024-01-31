
// Eventos  

// Esconder/Exibir F.A.Q
var elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(function (duvida) {
    var icon = duvida.querySelector('.fa-caret-down');

    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa');
        
        // Verifique a classe atual do ícone e alterne entre para cima e para baixo
        if (icon.classList.contains('fa-caret-down')) {
            icon.classList.remove('fa-caret-down');
            icon.classList.add('fa-caret-up');
        } else {
            icon.classList.remove('fa-caret-up');
            icon.classList.add('fa-caret-down');
        }
    });
});

// Voltar ao topo
window.scroll({
    top:0,
    behavior:'smooth'
}
);