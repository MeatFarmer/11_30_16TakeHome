console.log('js sourced');
$(document).ready(function(){
console.log('jquery sourced');
// receives click from searchButton
$('#searchButton').on('click', function(){
console.log('on click for searchButton');
// gets user input
var movieTitle = $('#searchIn').val();
  console.log('searching for:', movieTitle);
  var searchUrl = 'http://www.omdbapi.com/?s=' + movieTitle;
    console.log('searchUrl:', searchUrl);
// ajax called
    $.ajax({
      url: searchUrl,
      dataType: 'JSON',
      success: function(data){
        console.log('success, data:', data);
        // parse the returned data
        console.log('data.Search:', data.Search);
        var searchResults = data.Search;
        // display the data on the DOM
        displaySearchResults(searchResults);
      }
    }); // end ajax
}); //end onclick for searchButton
var displaySearchResults = function(results){
    console.log('in displaySearchResults:', results);
    // search loop for Title, Year, and Poster
    var outputText = '';
    for (var i = 0; i < results.length; i++) {
      outputText += '<h2>' + results[i].Title + '</h2><p>' + results[i].Year + '</p>';
      outputText += '<img src="' + results[i].Poster + '"/>';
    }
    // div display
    $('#outputDiv').html(outputText);
  }; // end displaySearchResults
}); //end document.ready
