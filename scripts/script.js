const nav = document.querySelector(".primary-navigation");
const nav_toggle = document.querySelector(".mobile-nav-toggle");

const navToggleAction = () => {
    const visibility = nav.getAttribute("data-visible");
    
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        nav_toggle.setAttribute("aria-expanded", true);
    } else if(visibility === "true") {
        nav.setAttribute("data-visible", false);
        nav_toggle.setAttribute("aria-expanded", false);
    }

}

nav_toggle.addEventListener("click", navToggleAction);
