

//navbar

const btnNavbar = document.querySelector('.btnNavbarContainer');
const navbarSpan = document.querySelector('.btnNavbar');
const navBar = document.querySelector('.nav');


btnNavbar.addEventListener('click', ()=>{
	navbarSpan.classList.toggle('btnNavbarOpen');
	navBar.classList.toggle('navbarOpen');
})