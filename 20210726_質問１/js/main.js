const target = document.getElementById('menu');
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById('nav');
  nav.classList.toggle('in');
  // const header = document.getElementsByClassName('header');
  // if (nav.classList.length = 2) {
  //   header[0].style.position = 'static';
  //   header[0].style.top = 'auto';
  //   header[0].style.left = 'auto';
  // } else {
  //   header[0].style.position = 'fixed';
  //   header[0].style.top = 0;
  //   header[0].style.left = 0;
  // }
});