var cursor = document.querySelector('.cursor');
var cursor_blur = document.querySelector('.cursor-blur');
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + 30 + "px"
    cursor.style.top =  dets.y + "px"
    cursor_blur.style.left = dets.x - 250+ "px"
    cursor_blur.style.top =  dets.y - 250+ "px"
})


gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    delay:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top - 11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        start:"top -25%",
        scrub:2,
        end:"top -70%"
    }
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach((element)=>{
    element.addEventListener("mouseenter",()=>{
        cursor.style.scale = 2;
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    element.addEventListener("mouseleave",()=>{
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 45%",
        end:"top 47%",
        scrub:4
    }
});
gsap.to("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 47%",
        scrub:4
    }
});
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"#body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
});