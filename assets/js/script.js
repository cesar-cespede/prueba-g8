$(function () {
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
 
  $('[data-toggle="tooltip"]').tooltip();

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var micifus = this.hash;

      $("html, body").animate({
        scrollTop: $(micifus).offset().top
      }, 800, function(){
        window.location.hash = micifus;
      });
    }
  });
})

