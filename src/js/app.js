$(".contribute input:checkbox").click(function () {
  var bol = $("input:checkbox:checked").length >= 5;
  $("input:checkbox").not(":checked").attr("disabled", bol);
});

$(function () {                       //run when the DOM is ready
  $("#nav-button").click(function () {  //use a class, since your ID gets mangled
    $(".top-container").toggleClass("expanded");      //add the class to the clicked element
  });
});


$("[data-trigger]").on("click", function () {
  var trigger_id = $(this).attr('data-trigger');
  $(trigger_id).toggleClass("show");
  $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function (e) {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
}); 