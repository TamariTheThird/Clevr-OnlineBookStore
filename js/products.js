$(document).ready(function () {
  $('nav').load('/navbar.html');
  let category_value;

  function Category() {
    switch (category_value) {
      case '1':
        category = 'art';
        break;
      case '2':
        category = 'biographis';
        break;
      case '5':
        category = 'fiction';
        break;
      default:
        category = 'unknown';
    }
  }

  // async function getAllBooks() {
  //   let getBooks = new Promise(function () {
  //     setTimeout(function () {

  //     }, 2000);
  //   });
  //   console.log(await getBooks);
  // }
  // getAllBooks();

  $.ajax({
    type: 'get',
    url: '/jsons/book.json',
    data: 'text',
    success: function (response) {
      response.forEach((el) => {
        category_value = el.category;
        Category();

        let single_book = `  <div class="list-group">
                  <div class="list-group-item">
                    <div class="d-flex">
                      <div class="w-25">
                     <span class="cat"> ${category} </span>
                        <img src="${el.image}" alt="" />
                      </div>
                      <div class="w-50">
                        <h4 class="mb-1">${el.title}</h4>
                        <h5 class="mb-1 role">${el.author}</h5>
                        <h6>E-mail: ${el.format}</h6>
                        <h6>Phone: ${el.year}</h6>
                      </div>
                      <div class="w-25">
                        <p>${el.reviews}</p>
                      </div>
                    </div>
                  </div>
                </div>`;
        $('#all-books').append(single_book);

        // -------------------------------------------------------------------------

        // let li = `<li> ${day}</li>`;
      });
    },
  });
});
