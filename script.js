const back = $('#btn-back');
const next = $('#btn-next');
const itens =  Array.from(document.getElementsByClassName('carousel__content__item'));
console.log(itens)

const findIndexSelected = () => {
    return itens.findIndex(e => Array.from(e.classList).includes('content__item-show'))
}

back.click(()=> {
    const indexSelected = findIndexSelected();
    if(indexSelected === 0){
        itens[itens.length - 1].classList.add('content__item-show');
    }else {
        itens[indexSelected - 1].classList.add('content__item-show');
    }
    itens[indexSelected].classList.remove('content__item-show');
});

next.click(()=> {
    const indexSelected = findIndexSelected();
    if(indexSelected === itens.length - 1){
        itens[0].classList.add('content__item-show');
    }else {
        itens[indexSelected + 1].classList.add('content__item-show');
    }
    itens[indexSelected].classList.remove('content__item-show');
});