function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.style.width === "250px") {
        navbar.style.width = "0";
    } else {
        navbar.style.width = "250px";
    }
}