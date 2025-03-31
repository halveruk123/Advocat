document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".mobile-menu-overlay");
    const closeMenu = document.querySelector(".close-mobile-menu");

    // открытие моб меню
    burger.addEventListener("click", function() {
        mobileMenu.classList.add("active");
    });

    // закрытие моб меню
    closeMenu.addEventListener("click", function() {
        mobileMenu.classList.remove("active");
    });

    const menuItems = document.querySelectorAll(".mobile-menu__item > .mobile-menu__link");

    // открытие подменю
    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Отмена перехода по ссылке
            const submenu = this.nextElementSibling;
            
            if (submenu && submenu.classList.contains("mobile-submenu")) {
                if (submenu.style.maxHeight) {
                    submenu.style.maxHeight = null;
                    submenu.style.overflow = "hidden";
                    submenu.classList.remove("active");
                } else {
                    submenu.classList.add("active");
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                    submenu.style.overflow = "visible";
                }
            }
        });
    });
});