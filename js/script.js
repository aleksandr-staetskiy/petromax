//   smooth scroll 

$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})


$( document ).ready(function () {

  $(".moreBox").slice(0, 3).show();
  if ($(".blogBox:hidden").length != 0) {
    $("#loadMore").show();
  }		
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
    $(".moreBox:hidden").slice(0, 6).slideDown();
    if ($(".moreBox:hidden").length == 0) {
      $("#loadMore").fadeOut('slow');
    }
  });
});

AOS.init();