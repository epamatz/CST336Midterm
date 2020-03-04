//https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data
var url = "https://openlibrary.org/api/books?bibkeys=ISBN:";
$("#button").on("click", function() {
  isbn= $("#isbn").val();
  url = "https://openlibrary.org/api/books?bibkeys=ISBN:";
  url += isbn
  url +="&format=json&jscmd=data";
  // ajax call
    console.log(url);
  $.ajax({
    method: "GET",
    dataType: "json",
    url: url,
    success: function(result, status) {
      var isbn= $("#isbn").val();   
        console.log(result["ISBN:"+isbn]["title"])
        console.log(result)
      $("#title").append(result["ISBN:"+isbn]["title"]);
        $("#name").append(result["ISBN:"+isbn]["authors"]["name"]);
      //for(let i = 0; i < result.length; i++) {
       // $(".flex-container").append('<div class="img-thumbnail flex-item"><img src="' + result.message[i] + '"></div>');
       // console.log(result);
     // }
    }, error: function(err) {
      console.log(err)
    }
  })
})