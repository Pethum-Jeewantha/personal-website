$(window).on('scroll', () => {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > +($(window).height() - $('.navbar').height()));
});

$('.nav-link').on('click', () => $('.navbar-toggler').trigger('click'));
