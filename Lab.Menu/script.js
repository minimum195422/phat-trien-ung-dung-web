const menuItem = document.querySelectorAll(".item");
const displayText = document.getElementById("content");

menuItem.forEach(item => {
    item.addEventListener("click", function() {
        menuItem.forEach(i => i.classList.remove("selected"));
        this.classList.add("selected");
        displayText.textContent = this.getAttribute('data-menu');
    });
});
