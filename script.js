
// https://preview.themeforest.net/item/eren-magento-2-responsive-fashion-theme/full_screen_preview/19761418?_ga=2.246191751.2052785564.1738261510-993370187.1728848196let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
        const headerBoxes = document.querySelectorAll('.header-box');

        headerBoxes.forEach((box) => {
          box.addEventListener('mouseenter', () => {
            box.style.backgroundPosition = 'center bottom'; 
          });
          box.addEventListener('mouseleave', () => {
            box.style.backgroundPosition = 'center top';
          });
        });