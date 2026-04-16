// DOM - Document Object Model

// HTML teglariga ulanish

// HTML  - teglari orqali ulanish
const title_with_html_tags = document.getElementsByTagName("h2");

// class yordamida ulaninsh - bir nechta elementni qaytaradi, chunki bir nechta elementda bir xil class bo'lishi mumkin
const title_with_class = document.getElementsByClassName("title");

// ID yordamida ulanish - ID noyob bo'lishi kerak, shuning uchun bitta elementni qaytaradi
const title_with_id = document.getElementById("myTitle");

// querySelector va querySelectorAll - CSS selector orqali ulanish -  CSS selector yordamida HTML elementlarni tanlab olinadi
const titles = document.querySelectorAll(".title"); // class orqali

// createElement - yangi element yaratish
const text = document.createElement("p");

// textContent - element ichidagi matnni o'zgartirish
