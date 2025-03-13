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


let currentIndex = 0;
const books = document.querySelector('.book-slider');
const totalBooks = document.querySelectorAll('.box-book').length;
const boxesPerView = 3;

document.querySelectorAll('.btn-seller').forEach(button => {
    button.addEventListener('click', () => {
        if (button.querySelector('.fa-arrow-left')) {
            // Nhấn nút trái
            currentIndex = Math.max(currentIndex - 1, 0); // Không cho nhỏ hơn 0
        } else {
            // Nhấn nút phải
            currentIndex = Math.min(currentIndex + 1, totalBooks - boxesPerView); // Không cho vượt quá giới hạn
        }

        // Cập nhật vị trí cuộn
        const offset = -currentIndex * (100 / boxesPerView); // Tính toán offset
        books.style.transform = `translateX(${offset}%)`;
    });
});