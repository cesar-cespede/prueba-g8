$(function () {
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
