$(".contribute input:checkbox").click(function () {
  var bol = $("input:checkbox:checked").length >= 5;
  $("input:checkbox").not(":checked").attr("disabled", bol);
});