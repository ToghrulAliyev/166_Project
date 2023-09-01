const menuItem = document.getElementById("home")
const submenu = document.getElementsByClassName("submenu")[0]
 
console.log("submenu",submenu)
function openSubmenu() {
    // alert("111")
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
  }
menuItem.addEventListener("click", ()=>  openSubmenu())
console.log("menuItem",menuItem)