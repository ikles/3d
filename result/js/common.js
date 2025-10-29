jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
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
          slidesToShow: 2
        }
      }
    ]
  });

}); //ready

