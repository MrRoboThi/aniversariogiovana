const btnMenu = document.getElementById('navbar-icon');
const menu = document.querySelector('.navbar-menu');
const linksMenu = document.querySelectorAll('.navbar-menu a'); 

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  const estaAberto = menu.classList.contains('ativo');
  btnMenu.setAttribute('aria-expanded', estaAberto);
});

linksMenu.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('ativo'); 
    btnMenu.setAttribute('aria-expanded', 'false'); 
  });
});