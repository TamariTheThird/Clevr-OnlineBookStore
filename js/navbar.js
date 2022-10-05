$(document).ready(function () {
  $('.nav').hide();

  $('.menu').click(function (e) {
    e.preventDefault();
    $('.nav').toggle();
  });

  // let pathname = window.location.pathname;

  // if (pathname == '/index.html' && window.history.length == 1) {
  //   $('.nav').hide();
  //   $('.menu').click(function (e) {
  //     e.preventDefault();
  //     $('.nav').show();
  //   });
  // } else {
  //   $('.menu').click(function (e) {
  //     e.preventDefault();
  //     $('.nav').toggle();
  //   });
  // }

  let doc_height = $(document).innerHeight();

  $(window).scroll(function () {
    if (window.scrollY >= doc_height / 2) {
      $('.nav').hide();
    }
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    if (link.href.includes(`${pathname}`)) {
      link.classList.add('active');

      console.log(link);
    }
  });
});
