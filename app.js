fetch('address-book.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const address_book_data = JSON.stringify(myJson);
    render_page(address_book_data);
  });

function render_page(address_book_data) {
  console.log(address_book_data);
}
