
   const slider = $('.products__slider').bxSlider({
        pager: false,//убрали точки снизу, смотреть в документации options->controls
        controls: false //убрали стрелочки, смотреть в документации options->controls
    });

$('.products__left').click(e=>{
    slider.goToPrevSlide(); //смотреть в документации options->publicsMethod
})
$('.products__right').click(e=>{
    slider.goToNextSlide(); //смотреть в документации options->publicsMethod
})