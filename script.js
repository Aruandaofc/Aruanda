let slideAtual = 0;
    function moverSlide(direcao) {
      const area = document.getElementById("slidesArea");
      const totalSlides = area.children.length;
      slideAtual += direcao;
      if (slideAtual < 0) slideAtual = totalSlides - 1;
      if (slideAtual >= totalSlides) slideAtual = 0;
      const offset = -slideAtual * 100;
      area.style.transform = `translateX(${offset}%)`;
    }

    setInterval(() => moverSlide(1), 5000); // troca automática

    function abrirMenu() {
  const menu = document.getElementById('menuLateral');
  menu.style.left = '0';
  menu.classList.add('aberto');
  document.querySelector('.hamburguer').style.display = 'none';
}

function fecharMenu() {
  const menu = document.getElementById('menuLateral');
  menu.style.left = '-270px';
  menu.classList.remove('aberto');
  document.querySelector('.hamburguer').style.display = 'block';
}