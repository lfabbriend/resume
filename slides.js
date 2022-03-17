(function(){
    const sliders = [...document.querySelectorAll('.SliderBody')];
    const arrowNext = document.querySelector('#next');
    const arrowPrevious = document.querySelector('#previous');
    let value;

    arrowNext.addEventListener('click', ()=>changeSlide(1));
    arrowPrevious.addEventListener('click',()=>changeSlide(-1));

    function changeSlide(change){
        const currentElement = Number(document.querySelector('.SliderBody--show').
        dataset.id);
        
        value=currentElement;
        value+=change;
        
        if(value === 0 || value == sliders.length+1){
            value = value ===0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('SliderBody--show');
        sliders[value-1].classList.toggle('SliderBody--show');

    }

})()