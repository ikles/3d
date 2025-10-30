jQuery(document).ready(function( $ ) {

  $('.burger').click(function () {
    $(this).toggleClass('burger-open');
    $('body').toggleClass("body-open");
    $('.header__col').toggleClass("open");    
  });

  $('body').click(function () {
    $('.burger').removeClass('burger-open');
    $('body').removeClass("body-open");
    $('.header__col').removeClass("open");
  });


  $(".burger, .header__col").click(function (e) {
    e.stopPropagation();
  });


  if($('select').length) {
    $('select').each(function () {
      $(this).select2({
        minimumResultsForSearch: -1,
        dropdownParent: $(this).parent()
      });
    });
  }






  function download1(parentFileBlock) {
    const inputFile = parentFileBlock.querySelector('.multi-file-input');
    const imgWrapper = parentFileBlock.querySelector('.calc__load-format');  

    inputFile.addEventListener("change", function() {
      let file = this.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = ev => {
        const src = ev.target.result;
        //imgWrapper.innerHTML = `<img class="objphotos-img" src="${src}" alt="${file.name}" />`;
        imgWrapper.innerHTML = file.name;
      };
    });
  }

  // Инициализация для всех блоков
  document.querySelectorAll('.add-file__item').forEach(item => {
    download1(item);
  });


  function download2(parentFileBlock) {
    const inputFile = parentFileBlock.querySelector('.multi-file-input');
    const imgWrapper = parentFileBlock.querySelector('.addrev__previews');  

    inputFile.addEventListener("change", function() {
      let file = this.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = ev => {
        const src = ev.target.result;
        imgWrapper.innerHTML += `          
        <div class="addrev__preview">
          <div class="addrev__img-w">
          <img src="${src}" alt="${file.name}" />
          </div>
          <div class="addrev-preview__close"></div>
        </div>`;
        //imgWrapper.innerHTML = file.name;
      };
    });

  }

  document.querySelectorAll('.add-img__item').forEach(item => {
    download2(item);
  });

  
  $('.addrev__previews').click(function(e) {
    $(e.target).closest('.addrev__preview').remove();
  });


  
  $('.rating__star').click(function () {
    let starValue = $(this).attr('data-star-value');
    $(this).parent().attr('data-result-value', starValue);
  });


  $('.addrev__close').click(function () {
    $(this).closest('.addrev').fadeOut();
  })


  $('.slider__slider').slick({            
    infinite: true,    
    slidesToShow: 1,
    speed: 200,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 10,
    autoplaySpeed: 4000,
    cssEase: 'ease-out',
    dots: true,    
    arrows: false,   
    vertical: true,
  });
  

  $('.completed__sl').slick({            
    infinite: false,    
    slidesToShow: 3,
    speed: 200,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 10,
    autoplaySpeed: 4000,
    cssEase: 'ease-out',
    arrows: true,    
    dots: true,    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
          infinite: true    
        }
      }
    ]
  });

  $('.rev__sl').slick({            
    infinite: false,    
    slidesToShow: 2,
    speed: 200,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 10,
    autoplaySpeed: 4000,
    cssEase: 'ease-out',
    arrows: true,    
    dots: true,   
    variableWidth: false, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
          infinite: true    
        }
      }
    ]
  });


  $('li.has-children i').click(function () {
    $(this).closest('.has-children').toggleClass('open');
  })


  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });
    
  }
  
  popup('.rev__btn', '.modal-overlay_1', '.modal-close_1');

}); //ready

