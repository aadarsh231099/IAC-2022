const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
let daysItem=document.querySelector("#days");
let hoursItem=document.querySelector("#hours");
let minsItem=document.querySelector("#min");
let secsItem=document.querySelector("#sec");

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

let countDown=() =>{
    let futureDAte=new Date("20 Dec 2022");
    let currentDate=new Date();
    let myDate=futureDAte-currentDate;
    let days=Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours=Math.floor(myDate / 1000 / 60 / 60)% 24;
    let mins=Math.floor(myDate / 1000 / 60)% 60;
    let secs=Math.floor(myDate/ 1000)% 60;
    console.log(days);
    console.log(hours);
    console.log(mins);
    console.log(secs);
    daysItem.innerHTML=days;
    hoursItem.innerHTML=hours;
    minsItem.innerHTML=mins;
    secsItem.innerHTML=secs;
}
countDown()
setInterval(countDown,1000)
