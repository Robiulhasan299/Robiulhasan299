let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}




let searchFrom = document.querySelector('.search-from');
document.querySelector('#search-box').onclick = () =>{
    searchFrom.classList.add('active');
}
document.querySelector('#close-search').onclick = () =>{
    searchFrom.classList.remove('active');
}






window.onscroll = ()=> {
    navbar.classList.remove('active');
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}


window.onload = ()=> {
 
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

 


// HOME SLIDE SECTION STARD HERE
$(document).ready(function(){
    $('.sliders').slick({
        dots: true,
        loop:true,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i> </button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i> </button>',
    });
})

 
// PRODUCT SLIDE HERE shop-sliders reviews-slide
$(document).ready(function(){
    $('.shop-sliders').slick({

        prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i> </button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i> </button>',

        loop:true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }

 
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
})

// reviews-slide section starad here  
$(document).ready(function(){
  $('.reviews-slide').slick({

    loop:true,
   autoPlay:true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }


        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
})




// blog-slider section starad here  

$(document).ready(function(){
  $('.blog-slider').slick({

    loop:true,
    autoPlay:true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }


        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
})



 

 







$(document).ready(function(){
  $('.clients-slide').slick({

    loop:true,
   autoPlay:true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }


        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
})



 

 