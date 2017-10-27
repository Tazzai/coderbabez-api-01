$(document).ready(function() {

  $('#searchForm').submit(function(e) {
    console.log(e);
    e.preventDefault();
    searchGiphy();
  });
});

function searchGiphy() {
  var search_term = $('#searchField').val();
  console.log("searching for " + search_term);
  var url = "http://api.giphy.com/v1/gifs/search?q=" + search_term + "&api_key=Rcx7a5vfUp1y6BZ1KjUtKLI2UovfkU3j";
  console.log("searching url: " + url);
  $.getJSON(url, function(results) {
      console.log("results.data");
      console.log(results.data);
      $('#results').empty();
      for(var i=0; i< results.data[i].length; i++) {
        console.log("data " + i);
        $('#results').append("<img src='" + results[i].data.images.fixed_width.url + "' />");
      }
  });
}
