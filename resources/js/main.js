function openside() {
    const sideBarWidth = document.getElementById("mySidenav").style.transform;
    
    if (sideBarWidth == "translateX(120px)") {
        document.getElementById("mySidenav").style.transform = "translateX(0)";
        document.getElementById("close-open").style.transform = "rotate(0deg)";
    } else {
        document.getElementById("mySidenav").style.transform = "translateX(120px)";
        document.getElementById("close-open").style.transform = "rotate(180deg)";
    }
}
function hamburgerBtn() {
    const menuWidth = document.getElementById("hamburger").style.transform;

    if (menuWidth == "translateX(500px)") {
        document.getElementById("hamburger").style.transform = "translateX(0)";
    } else {
        document.getElementById("hamburger").style.transform = "translateX(500px)";
    }
}
