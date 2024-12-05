document.addEventListener("DOMContentLoaded", function () {
    const date = new Date();
    const persianDate = date.toLocaleDateString("fa-IR");
    const time = date.toLocaleTimeString("fa-IR");
    document.getElementById("persian-date-time").innerText = `${persianDate} ${time}`;
});

function navigateTo(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}

function openCustomerForm() {
    alert("صفحه افزودن مشتری ظاهر می‌شود!");
}

function toggleProductList() {
    const productList = document.getElementById("product-list");
    productList.classList.toggle("hidden");
}