const icon = document.querySelector(".category_icon");
const Category_Menu = document.querySelector(".Category_Menu");

icon.onclick = function() {
    Category_Menu.classList.toggle("active");
};