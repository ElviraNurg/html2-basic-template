/* в этот файл добавляет скрипты*/
const next = document.querySelector('.promo__button-next');
const prev = document.querySelector('.promo__button-prev');
const sliderItems = document.querySelectorAll('.promo__list-item');
const promoControls = document.querySelectorAll('.promo__controls');
const COLORS=['flat-white','lavender','espresso']
const checkButtonsStatus=()=>{
    for (let i = 0; i < sliderItems.length; i++) {
        if (sliderItems[i].classList.contains('slide__current')) {
           

                if(i === 0){
                    prev.setAttribute("disabled", "true" );
                }else{
                    prev.removeAttribute("disabled" )
                }
                if(i === sliderItems.length-1){
                    next.setAttribute("disabled", "true" );
                }else{
                    next.removeAttribute("disabled")
                }
        }
    }
}
const onLoadStatus=()=>{
    checkButtonsStatus()
}
document.addEventListener('click', onLoadStatus);

const swipSliderNext = () => {
    for (let i = 0; i < sliderItems.length; i++) {
        if (sliderItems[i].classList.contains('slide__current') && i !== sliderItems.length - 1) {
            console.log('i ',i);
            sliderItems[i].classList.remove('slide__current');
            sliderItems[i + 1].classList.add('slide__current');
            promoControls[i].classList.remove('promo__controls-active');
            promoControls[i+1].classList.add('promo__controls-active');
            next.classList.remove(COLORS[i]);
            prev.classList.remove(COLORS[i]);
            next.classList.add(COLORS[i+1]);
            prev.classList.add(COLORS[i+1]);
            break
        }
    }
}

const swipSliderPrev = () => {
    for (let i = sliderItems.length-1; i >= 0; i--) {
        
        if (sliderItems[i].classList.contains('slide__current')&& i!==0 ){
            console.log('i ',i);
            sliderItems[i].classList.remove('slide__current');
        sliderItems[i - 1].classList.add('slide__current');
        promoControls[i].classList.remove('promo__controls-active');
            promoControls[i-1].classList.add('promo__controls-active');
            next.classList.remove(COLORS[i]);
            prev.classList.remove(COLORS[i]);
            next.classList.add(COLORS[i-1]);
            prev.classList.add(COLORS[i-1]);
        break
        }
            
    }
}

next.addEventListener('click', handleClickNext);
const handleClickNext = () => {
    swipSliderNext()
}
prev.addEventListener('click', handleClickPrev);
const handleClickPrev = () => {
    swipSliderPrev()
}
