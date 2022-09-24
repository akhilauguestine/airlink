function menuOnClick() {
    const menu_open = document.getElementsByClassName("header__btn-hamburger");
    menu_open[0].classList.toggle("hidden");
    const menu_close = document.getElementsByClassName("header__btn-close");
    menu_close[0].classList.toggle("hidden");
    const header_list = document.getElementsByClassName("header__list");
    header_list[0].classList.toggle("header__list--show");
  }

  $(document).ready(function() {

  $(".slick-slider").slick({
    slidesToShow: 1,
    infinite:false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
      // dots: false, Boolean
     arrows: false,
     responsive: [
      {
        breakpoint: 99999,
        settings: "unslick"
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
   });

  //  const solution_toggle = document.getElementsByClassName("our-services__tiles-item");
  //   menu_open[0].classList.toggle("hidden");

    $( ".our-services__tiles-item.row1" ).hover(
      function() {
        let dropDowns = Array.from(document.querySelectorAll('.our-services__tiles-item.row1'));
        dropDowns.forEach(node => {
          node.classList.remove('active');
        });
        $( this ).addClass("active");
      }
    );

    $( ".our-services__tiles-item.row2" ).hover(
      function() {
        let dropDowns = Array.from(document.querySelectorAll('.our-services__tiles-item.row2'));
        dropDowns.forEach(node => {
          node.classList.remove('active');
        });
        $( this ).addClass("active");
      }
    );


    
    $(".footer__quiklink-head").click(function() {
      $(".footer__quiklink-head").not(this).siblings().removeClass("active");
      $(this).siblings().toggleClass("active");
      
  })
  $(".footer__quiklink-head").click(function() {
      if (!$(this).hasClass("arrow")) {
          $(".footer__quiklink-head").removeClass("arrow");
      }
      $(this).toggleClass("arrow");
      
  });
     

});