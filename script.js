let menuList = document.getElementById("menuList")
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