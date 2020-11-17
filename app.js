const navSlide = () => {
  const ham = document.querySelector('#ham');
  const nav = document.querySelector('.my-links');
  const navLinks = document.querySelectorAll('.nav-links');

  ham.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  })

  document.addEventListener('mouseup', () => {
    nav.classList.remove('nav-active')
  })
}

navSlide();


