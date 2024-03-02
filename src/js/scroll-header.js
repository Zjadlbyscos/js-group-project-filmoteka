let lastScrollTop = 0;

window.addEventListener("scroll",function(){

    let currentScroll = window.scrollY || this.document.documentElement.scrollTop;

if (currentScroll>lastScrollTop){

    this.document.querySelector('.header').classList.add('scrolling');

}
else{
this.document.querySelector('.header').classList.remove('scrolling');

}
lastScrollTop=currentScroll
})