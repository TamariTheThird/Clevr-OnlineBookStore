$(document).ready(function () {
  let pathname = window.location.pathname;

  if (pathname == '/index.html' && window.history.length == 1) {
    $('.nav').hide();
  } else {
    $('.nav').show();
  }

  $('.menu').click(function (e) {
    e.preventDefault();
    $('.nav').toggle();
  });

  let doc_height = $(document).innerHeight();
  $(window).scroll(function () {
    if (window.scrollY >= doc_height / 2) {
      $('.nav').hide();
    }
  });

  $('.nav-link').each(function () {
    let url = $(this).attr('href');
    if (url == pathname) {
      $(this).addClass('active-page');
    }
  });
});
