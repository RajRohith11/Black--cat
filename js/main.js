document.addEventListener("DOMContentLoaded",function(){
    const back = document.getElementById("back");
    const next = document.getElementById("next");
    const slider = document.querySelector(".slider");
    next.style.display = 'none';

    back.addEventListener("click",function(){
        slider.scrollLeft += 50;
        next.style.display ="block";
        if(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth){
            back.style.display = "none";
        }
    next.addEventListener("click",function(){
        slider.scrollLeft -= 10;
        back.style.display = "block";
        if(slider.scrollLeft  <= 0){
            next.style.display = "none"
        }
    })    

    })
})

document.addEventListener("DOMContentLoaded",function(){
    const bar = document.getElementById("menu-bar-btn")
    const list = document.querySelectorAll(".aside")
    bar.addEventListener("click",function(){
        list.forEach(
            item =>{
                if(item.sttyle){

                }
            }
        )
    })
})