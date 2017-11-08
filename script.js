$(document).ready(function() {

  $('#searchButton').click(function() {
    console.log ('buttonClicked');
    var q = $('#searchField').val ();
    showImage(q);
  });
});

function showImage(image) {
  $('#results').append(image);
}
