const navToggle = document.querySelector(".js-nav-toggle"), 
   navMenu = document.querySelector(".js-nav-menu");

navToggle.addEventListener("click", () => {
   const expanded = navToggle.getAttribute("aria-expanded") == 'true';

   navToggle.setAttribute("aria-expanded", !expanded);
   navMenu.setAttribute("aria-hidden", expanded);
})