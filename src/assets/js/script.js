
document.addEventListener('DOMContentLoaded', () => {

    // --- Controle do Menu Hambúrguer (Mobile) ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden'); // Alterna a visibilidade do menu
            hamburgerBtn.classList.toggle('tham-active'); // Ativa/desativa a animação do ícone do hambúrguer
            // Para evitar rolagem da página quando o menu mobile está aberto
            document.body.classList.toggle('overflow-hidden');
        });
    }

    // --- Controle do Dropdown de Categorias (Mobile) ---
    const dropdownBtnMobile = document.getElementById('dropdownBtnMobile');
    const dropdownMenuMobile = document.getElementById('dropdownMenuMobile');

    if (dropdownBtnMobile && dropdownMenuMobile) {
        dropdownBtnMobile.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede que o clique no botão feche o dropdown imediatamente (se houver um listener global)
            dropdownMenuMobile.classList.toggle('hidden');
        });

        // Fechar dropdown mobile ao clicar fora dele ou do botão
        document.addEventListener('click', (event) => {
            if (!dropdownBtnMobile.contains(event.target) && !dropdownMenuMobile.contains(event.target)) {
                dropdownMenuMobile.classList.add('hidden');
            }
        });
    }

    const dropdownBtnDesktop = document.getElementById('dropdownBtnDesktop');
    const dropdownMenuDesktop = document.getElementById('dropdownMenuDesktop');

    if (dropdownBtnDesktop && dropdownMenuDesktop) {
        dropdownBtnDesktop.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdownMenuDesktop.classList.toggle('hidden');
        });

        // Fechar dropdown desktop ao clicar fora dele ou do botão
        document.addEventListener('click', (event) => {
            if (!dropdownBtnDesktop.contains(event.target) && !dropdownMenuDesktop.contains(event.target)) {
                dropdownMenuDesktop.classList.add('hidden');
            }
        });
    }
});
