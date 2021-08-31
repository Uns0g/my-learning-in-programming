const dropdownBtns = document.querySelectorAll('.dropdown-button');

dropdownBtns.forEach(button => {
    button.addEventListener('click', () => {
        const dropdownMenu = button.nextElementSibling;
        dropdownMenu.classList.toggle('dropdown-menu--hidden');
    });
})

function openMobileMenu() {
    let navMenu = document.querySelector(".navbar > ul");

    if(navMenu.style.visibility === "hidden"){
        navMenu.style.visibility = "visible";
    }
    else{
        navMenu.style.visibility = "hidden";
    }
}