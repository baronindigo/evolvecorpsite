function burger_menu() {
    document.getElementsByTagName("header")[0].classList.toggle("menu-active");
}

let ourHistory = document.querySelector(".our-history");
ourHistory.addEventListener('click', (e) => {
	init();
});