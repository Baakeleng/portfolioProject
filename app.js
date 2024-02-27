function myMenuFunction(){
var menuBth = document.getElementById("myNavMenu");
if(menuBth.className ==="main-home"){
    menuBth.className += "responsive";
}else{
        menuBth.className= "main-home";
    }
}



var typingEffect = new Typed(".typedText",{
    strings:["Junior","Web","Developer"],

    loop:true,
    typedSpeed:100,
    backSpeed:80,
    backDelay:2000,
})

const scr = ScrollReveal({
    origin:"top",
    distance: "80px",
    duration: 2000,
    reset: true,
})
scr.reveal(".fav-name",{delay:100});
scr.reveal(".greet-text" ,{delay:200});
scr.reveal(".name-btn" ,{delay:200});
scr.reveal(".social_media_icons" ,{delay:200});
scr.reveal(".my-image" ,{delay:200});
scr.reveal(".greet-text" ,{delay:320});


scr.reveal(".top-header" ,{});

const scrLeft = ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
})

scrLeft.reveal("info-about", {delay:(100)});
scrLeft.reveal("contact-info", {delay:(100)});

const scrRight = ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
})

scrRight.reveal("skills", {delay:(100)});
scrRight.reveal("skills-box", {delay:(100)});

const sec = document.querySelector(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sec.forEach((current)=> {

        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
    })
}
function scrollActive(){
    const scrollY = window.scrollY;

    sec.forEach((current)=> {

        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector("main-home a [href*=*" + sectionId + "]")
        .classList.add("active-link");
    }else{

        document.querySelector("main-home a [href*=*" + sectionId + "]")
        .classList.remove("active-link");
    }
    });
}
window.addEventListener("scroll",scrollActive);