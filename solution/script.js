$(document).ready(function() {

  $('#searchForm').submit(function(e) {
    e.preventDefault();
    searchGiphy();
  });
});

function searchGiphy() {
  var search_term = $('#searchField').val();
  var url = "http://api.giphy.com/v1/gifs/search?q=" + search_term + "&api_key=Rcx7a5vfUp1y6BZ1KjUtKLI2UovfkU3j";
  console.log("searching url: " + url);
  $.getJSON(url, function(results) {
      $('#results').empty();
      for(var i=0; i< results.data.length; i++) {
        $('#results').append("<img src='" + results.data[i].images.fixed_height.url + "' />");
      }
  });
}
