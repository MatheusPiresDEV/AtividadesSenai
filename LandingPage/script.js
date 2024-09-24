document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.sliders');
    const btnPrev = document.getElementById('prev-button');
    const btnNext = document.getElementById('next-button');

    let currentSlide = 0;

    function hideSliders() {
        sliders.forEach(item => item.classList.remove('on'));
    }

    function showSlider() {
        sliders[currentSlide].classList.add('on');
    }

    function nextSliders() {
        hideSliders();
        currentSlide = (currentSlide === sliders.length - 1) ? 0 : currentSlide + 1;
        showSlider();
    }

    function prevSliders() {
        hideSliders();
        currentSlide = (currentSlide === 0) ? sliders.length - 1 : currentSlide - 1;
        showSlider();
    }

    btnNext.addEventListener('click', nextSliders);
    btnPrev.addEventListener('click', prevSliders);

    // Mostrar o primeiro slide ao carregar a página
    showSlider();
});

function toggleFoto() {
    const conteudoFoto = document.getElementById('conteudoFoto');
    if (conteudoFoto.style.display === 'none' || conteudoFoto.style.display === '') {
        conteudoFoto.innerHTML = '<img src="../assets/images/240806-mineracao.jpg" width="500">';
        conteudoFoto.style.display = 'block';
    } else {
        conteudoFoto.style.display = 'none';
    }
}

function toggleUtilidade() {
    const conteudoUtilidade = document.getElementById('conteudoUtilidade');
    if (conteudoUtilidade.style.display === 'none' || conteudoUtilidade.style.display === '') {
        conteudoUtilidade.innerHTML = `
            <h2>Utilidade do Cádmio</h2>
            <p>
                O cádmio é utilizado em baterias de níquel-cádmio, pigmentos, revestimentos metálicos e em algumas ligas para aumentar a resistência à fadiga.
            </p>
        `;
        conteudoUtilidade.style.display = 'block';
    } else {
        conteudoUtilidade.style.display = 'none';
    }
}
