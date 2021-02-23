
const track=document.querySelector('.carousel-track');
const slides=Array.from(track.children);
const nextButton=document.querySelector('.carousel-button-right');
const prevButton=document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slidesWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index)=>{
    slide.style.left = slidesWidth*index +'px';
};
slides.forEach(setSlidePosition);   



    const moveToSlide =(track, currentSlide, targetSlide) =>{
        track.style.transform = 'translateX(-'+ targetSlide.style.left +')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }

    const hideShowArrows =(slides, prevButton, nextButton, targetIndex) =>{
        if(targetIndex ===0){
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
        else if(targetIndex === slides.length -1){
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        }
        else{
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    }



    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot= dotsNav.querySelector('.current-slide');
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);

        moveToSlide(track, currentSlide, prevSlide)
        updateDots(currentDot, prevDot);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
        
    });
    
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot= dotsNav.querySelector('.current-slide');
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
        
    });

    dotsNav.addEventListener('click',e =>{
        const targetDot = e.target.closest('button');

        if(!targetDot) return;

        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
        hideShowArrows(slides, prevButton, nextButton, targetIndex);
        
    });






    const carousel = document.querySelector('.carousel');
    const right = document.querySelector('.right');
    const left = document.querySelector('.left');

    carousel.addEventListener('mouseenter',()=>{
        right.style.transform ='translateX('+50+'px)';
        right.style.opacity ='1';
    });
    carousel.addEventListener('mouseleave',()=>{
        
        right.style.transform ='translateX('+00+'px)';
        right.style.opacity ='0';
    });


    carousel.addEventListener('mouseenter',()=>{
        left.style.transform ='translateX(-'+50+'px)';
        left.style.opacity ='1';
    });
    carousel.addEventListener('mouseleave',()=>{
        left.style.transform ='translateX(-'+00+'px)';
        left.style.opacity ='0';   
    });

    const hamburger = document.querySelector('.hamburger-container');
    const mobileNav = document.querySelector('.nav ul');
    const close = document.querySelector('.close');

    hamburger.addEventListener('click',e=>{
        mobileNav.classList.toggle('close');
        hamburger.classList.toggle('hamburgerhover');
        hamburger.classList.toggle('hamburger-anime');
        mobileNav.classList.toggle('mask');

    });


    // hamburger.addEventListener('mouseenter',()=>{
    //     hamburger.style.background='red';
    // });
    // hamburger.addEventListener('mouseleave',()=>{
    //     hamburger.style.background='transparent';
    // });
    

    














// const moveToSlide =(track, currentSlide, targetSlide) => {
//     track.style.transform = 'translateX(-'+targetSlide.style.left +')';
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide');

// }

// const updateDots =(currentDot, targetDot)=>{
//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');
// }



// const hideShowArrows=(slides, prevButton, nextButton, targetIndex)=>{

// if(targetIndex ===1){
//     prevButton.classList.add('is-hidden');
//     nextButton.classList.remove('is-hidden');
// }
// else if(targetIndex === slides.length - 1){
//     prevButton.classList.remove('is-hidden');
//     nextButton.classList.add('is-hidden');
// }
// else{
//     prevButton.classList.remove('is-hidden');
//     nextButton.classList.remove('is-hidden');
// }

// }


// prevButton.addEventListener('click',e=>{
//     const currentSlide=track.querySelector('.current-slide');
//     const prevSlide= currentSlide.previousElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const prevDot = currentDot.previousElementSibling;
//     const prevIndex = slides.findIndex(slide => slide === prevSlide);

//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(currentDot, prevDot);
//     hideShowArrows(slides, prevButton, nextButton, prevIndex);
// });

// nextButton.addEventListener('click',e=>{
//     const currentSlide=track.querySelector('.current-slide');
//     const nexSlide = currentSlide.nextElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const nextDot = currentDot.previousElementSibling;
//     const nextIndex = slides.findIndex(slide => slide === nextSlide);

//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);
//     hideShowArrows(slides, prevButton, nextButton, nextIndex);
// });



