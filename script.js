function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("main-content");

    // Toggle the sidebar's visibility by changing its left property
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
        content.style.marginLeft = "250px";  // Shift content to the right
    } else {
        sidebar.style.left = "-250px";
        content.style.marginLeft = "0";  // Reset content margin
    }
}
