$(document).ready(function () {
  $.ajax({
    type: 'get',
    url: '/jsons/book.json',
    data: 'text',
    success: function (response) {
      console.log(response);
      response.forEach((el) => {
        //  category = el.category;
        //  Category();
        // all product
        let user = `  <div class="list-group">
                  <div class="list-group-item">
                    <div class="d-flex">
                      <div class="w-25">
                     <span class="cat"> ${el.category} </span>
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
        $('#prod').append(user);
        console.log(user);
        // category

        // let li = `<li> ${day}</li>`;

        //  let category_list = ` <li> <input type="radio" name="category" id="" value="${el.Category}" />
        //            <label for="">${day}</label></li>`;

        //  $('#inner-home ul').append(category_list);

        // $('li').each(function () {
        //   $('li').click(function () {
        //     $(this).addClass('selected');
        //     $(this).siblings().removeClass('selected');
        //     if ($(this).hasClass('selected')) {

        //     }
        //   });
        // });
      });
    },

    error: function (err) {
      if (err.status == 404) {
        $('html').load('404.html');
      }
    },
  });
});
