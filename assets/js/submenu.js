const menuItem = document.getElementById("home")
const submenu = document.getElementsByClassName("submenu")[0]
 function openSubmenu() {
 

     if (submenu.style.left === "0px" || submenu.style.left === ""  ) {
        submenu.style.left = "317px";
        submenu.style.display = "flex"
    } else {
        submenu.style.left = "0";
        // setTimeout(()=>{
        //     submenu.style.display = "none"
        // },1000)
    }
  }
menuItem.addEventListener("click", ()=>  openSubmenu())
 