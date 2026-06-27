
/* ===========================
   TYPING EFFECT
=========================== */

const roles = [
    "MCA Post Graduate",
    "Cloud Engineer",
    "DevOps",
    "Data Analyst",
    "Python Developer",
    "Computer Teacher"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function type() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    currentRole = roles[roleIndex];

    if (!isDeleting) {
        typing.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {
            isDeleting = true;

            setTimeout(type, 1500);
            return;
        }

    } else {

        typing.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;
            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;
        }
    }

    setTimeout(type, isDeleting ? 60 : 100);
}

type();


/* ===========================
   DARK MODE + SAVE
=========================== */

const themeBtn = document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';
    }
});


/* ===========================
   DOWNLOAD RESUME
=========================== */

function downloadResume() {

    const link = document.createElement('a');

    link.href = "/static/files/VivekkumarResume.pdf";

    link.download = "Vivek_Chauhan_Resume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}


/* ===========================
   SCROLL TOP BUTTON
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* ===========================
   CARD REVEAL ANIMATION
=========================== */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }

    });

},{threshold:0.2});

cards.forEach(card=>{

    observer.observe(card);

});


/* ===========================
   TILT EFFECT
=========================== */

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        let x = e.offsetX;
        let y = e.offsetY;

        let rotateX = (y - card.offsetHeight/2)/15;
        let rotateY = (card.offsetWidth/2 - x)/15;

        card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";
    });

});


/* ===========================
   SCROLL PROGRESS BAR
=========================== */

window.addEventListener("scroll",()=>{

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    document.getElementById("progress-bar")
        .style.width = progress + "%";
});


/* ===========================
   COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText = "0";

    const updateCounter = ()=>{

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target/100;

        if(c < target){

            counter.innerText =
            `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;
        }
    }

    updateCounter();
});


/* ===========================
   PRELOADER
=========================== */

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{
            loader.style.display="none";
        },1000);
    }

});


/* ===========================
   CUSTOM CURSOR
=========================== */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    if(cursor){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }

});

