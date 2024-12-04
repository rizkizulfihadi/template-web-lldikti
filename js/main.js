// nav sticky
window.addEventListener('scroll', function(){
    let nav = document.querySelector('nav');
    nav.classList.toggle('active', scrollY > 80);
});
window.addEventListener('scroll', function(){
    let nav = document.querySelector('nav');
    nav.classList.toggle('sticky', scrollY > 80);
});
// menu toggle
const menuToggle = document.querySelector('.menu-toggle input');
const menu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', function (){
    menu.classList.toggle('slide');
});

//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

// dark theme
let chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});


// count menu
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplays)=> {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplays.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});

// video gallery
let listVideo = document.querySelectorAll('.video-list .vid')
let mainVideo = document.querySelector('.main-video video')
let judul = document.querySelector('.main-video .judul')

listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active')
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src')
            mainVideo.src = src
            let text = video.children[1].innerHTML
            judul.innerHTML = text;
        }
    }
})

// faq section
let accordion = document.getElementsByClassName('accordion')
        
for( let i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
}

// social media floating

function toggleBtnSocial(){
    let btns = document.querySelector('.btns')
    let add = document.getElementById('add')
    let remove = document.getElementById('remove')
    let btn =document.querySelector('.btns').querySelectorAll('a')
    btns.classList.toggle('open')
    if( btns.classList.contains('open') ){
        add.style.display = "none"
        remove.style.display = "block"
        btn.forEach((e,i) =>{
            setTimeout(()=>{
                bottom = 40 * i;
                e.style.bottom = bottom + "px"
            }), 100 * i
        })
    }else{
        add.style.display = "block"
        remove.style.display = "none"
        btn.forEach(e =>{
            e.style.bottom = "0px"
        })
    }
}