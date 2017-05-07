$(document).ready(function() {
    $(".carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false
    });
    var distanceScrolled = 0;
    $(document).scroll(function(){
      var navTop = $(this).scrollTop();
      if (navTop >= distanceScrolled + 50){
        var navHeight = $(".navbar").css('height');
        $(".navbar").animate({top: "-" + navHeight}, 150);
        distanceScrolled = navTop;
      }
      else if (navTop < distanceScrolled - 50){
        $(".navbar").animate({top: 0}, 150);
        distanceScrolled = navTop;
      }
    })

});
