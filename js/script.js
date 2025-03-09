// check dom content loaded or not
document.addEventListener("DOMContentLoaded" , ()=>{

    // 
    let slides = document.querySelector(".slides");
    let dotsContainer = document.querySelector(".dots");
    let prevArrow = document.querySelector(".prevArrow")
    let nextArrow = document.querySelector(".nextArrow")
    let slideItem = document.querySelectorAll(".item");
    let slideCount = slideItem.length;
    let currentSlide = 0;
    
    
    // create dots
    for( n = 0 ; n < slideCount ; n++){
        let dot = document.createElement("span");
        if(n == 0 ) dot.classList.add("active");
        dot.setAttribute("data-index" , n)
        dot.classList.add("dot");
        dotsContainer.appendChild(dot)
    }

    let dots = document.querySelectorAll(".dot");

    // slider update func
    function SliderUpdate(index){
        if(index  >= slideCount){
            currentSlide = 0;
        }
        else if(index < 0){
            currentSlide = slideCount - 1
        }
        else{
            currentSlide = index
        }

        // re-position slides
        slides.style.transform = `translateX(${ -currentSlide * 100 }%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentSlide].classList.add("active");
        
    }
    
    // prev arrow 
    prevArrow.addEventListener("click" , ()=>SliderUpdate(currentSlide - 1))

    // prev arrow 
    nextArrow.addEventListener("click" , ()=>SliderUpdate(currentSlide + 1))
    
    dots.forEach((dot)=>{
        dot.addEventListener("click" , ()=>{
            let idx = parseInt(dot.getAttribute("data-index"));
            SliderUpdate(idx)
        })
    })
})