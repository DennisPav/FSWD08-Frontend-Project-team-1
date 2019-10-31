// Start of JQuery Code
$("document").ready(function() {
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 700) {
      console.log("hi");

      $("#scrollBtn").fadeIn(2000);

    } else {
      $("#scrollBtn").fadeOut(100);
    }
  });


});
// End of JQuery Code


document.getElementById('scrollBtn').addEventListener('click', () => window.scrollTo(0, 0));