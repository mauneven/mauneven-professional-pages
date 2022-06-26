(function(){

    const sliders = [...document.querySelectorAll('.resume__body')];

    const buttonNext = document.querySelector('#next');

    const buttonBefore = document.querySelector('#before');


    let value; 

    buttonNext.addEventListener('click', ()=> {

        changePosition(1);

    });
    
    buttonBefore.addEventListener('click', ()=> {

        changePosition(-1);    

    });


    const changePosition = (add)=>{

        const currentResume = document.querySelector('.resume__body--show').dataset.id;
        value = Number(currentResume);
        value += add;


        sliders[Number(currentResume)-1].classList.remove('resume__body--show');
        if(value === sliders.length+1   || value === 0){

            value = value === 0 ? sliders.length  : 1;

        }

        sliders[value-1].classList.add('resume__body--show');

    

    }

})();