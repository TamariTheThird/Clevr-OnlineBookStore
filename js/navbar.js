$(document).ready(function () {
  let pathname = window.location.pathname;

  if (pathname == '/index.html' && window.history.length == 1) {
    $('.nav').hide();
    $('.menu').click(function () {
      //       e.preventDefault();
      $('.nav').show();
    });
  } else {
    $('.menu').click(function () {
      //       e.preventDefault();
      $('.nav').toggle();
    });
  }

  let doc_height = $(document).innerHeight();

  $(window).scroll(function () {
    if (window.scrollY >= doc_height / 2) {
      $('.nav').hide();
    }
  });
});
