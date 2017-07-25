function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


$("#selectDropdown") .on("change", function(){
  $('#newsblock').empty();
  var val = $("#selectDropdown option:selected").val();
  var url ="https://api.nytimes.com/svc/topstories/v2/"+ val +".json";

url += '?' + $.param({
  'api-key': "b9c05d24b71e49bf9b72e24feaff8b0b"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {

              var count = 1;

for (var i=0; i<result.results.length; i++) {


            if (count <=12){


  if (result.results[i].multimedia.length>0){

      var abstract = '<p class = "abstract">'+result.results[i].abstract +' </p> ' ;
      var link = result.results[i].url;
      var image = result.results[i].multimedia[4].url;
      var htmlElements =  '<a href="' +link +'">' +abstract + ' </a> ';

      var createDiv = $("<div></div>");
      createDiv.addClass('singlenews');
      $('#newsblock').append(createDiv);
      createDiv.css('background-image', "url(" + image + ")");
      createDiv.append(htmlElements);
      $('.logoAndDropdown').addClass('minified');



    console.log (count++);
}
} else{
  break;
}
 }

}).fail(function(err) {
  throw err;
});

});












// function myFunction() {
//     document.getElementById("dropdownMenu").classList.toggle("showDropdown");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.selctionDropdown')) {

//     var dropdowns = document.getElementsByClassName("selectionContent");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('showDropdown')) {
//         openDropdown.classList.remove('showDropdown');
//       }
//     }
//   }
// }



// $(document).ready(function() {
//     var menuOptions; 

//     $('#selectMenu').on("change", function() {
//     	$("#newsContainer").empty();
//         var val = $("#selectMenu option:selected").val();
//         var url = "https://api.nytimes.com/svc/topstories/v2/"+ val +".json";

// 		url += '?' + $.param({
//   			'api-key': "b9c05d24b71e49bf9b72e24feaff8b0b"
// });

// $.ajax({

// url: url,
// method: 'GET',
// }).done(function(result) {

// 	//var div = document.createElement("div");

// 	var articleCount = 1;

// 		for (var i = 0; i < result.results.length; i++) {

// 			if (articleCount <= 12) {

// 				if(result.results[i].multimedia.length>0){

// 	        	// var para = $("<div>"+"<p>"+result.results[i].title+"</p>"+"<img src="+result.results[i].multimedia[4].url+">"+"<br>"+"abstract:"+"<p>"+result.results[i].abstract+"</p>"+"</div>");

// 	        	// $("#mainSection").append(para);

// 	        	// console.log(articleCount++);

// 				var abstract = '<p class = "abstract">'+result.results[i].abstract +' </p> ' ;
// 				var articleLink = result.results[i].url;
// 				var articleImg = result.results[i].multimedia[4].url;
// 				var htmlLink =  '<a href="' +articleLink +'">' +abstract + ' </a> ';

// 				var createDiv = $("<div></div>");
// 				createDiv.addClass("news");
// 				$('#newsContainer').append(createDiv);
// 				createDiv.css('background-image', "url(" + articleImg + ")");
// 				createDiv.append(htmlLink);
// 				$('.navItems').addClass('smSize');

// 				console.log (articleCount++);

// 	        	}
// 	        }else {
// 	        	break;
// 	        }
// 	    };


// }).fail(function(err) {
//   throw err;
// });
// });
// });