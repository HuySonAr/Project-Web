document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const paragraph = this.previousElementSibling; // Lấy thẻ <p> trước nó
            if (paragraph.classList.contains("expanded")) {
                // Nếu đang mở rộng -> Thu gọn lại
                paragraph.classList.remove("expanded");
                this.textContent = "Continue reading"; // Đổi lại thành "Continue reading"
            } else {
                // Nếu đang thu gọn -> Mở rộng
                paragraph.classList.add("expanded");
                this.textContent = "Short"; // Đổi thành "Short"
            }
        });
    });
});
