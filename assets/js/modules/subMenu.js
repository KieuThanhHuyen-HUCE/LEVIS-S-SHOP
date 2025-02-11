
// Lấy phần tử menu và overlay, icon close
let subMenu = document.getElementById("subMenu");
let overlay = document.querySelector("#subMenu .modal__overlay");
let closeWrap = document.querySelector("#subMenu .subMenu__header .close-wrap");


// Hàm toggle menu
function togglesubMenu() {
    subMenu.classList.toggle("open");
}
// Đóng menu khi click vào overlay
overlay.addEventListener("click", function () {
    subMenu.classList.remove("open");
});
closeWrap.addEventListener("click", function () {
    subMenu.classList.remove("open");
});



// BEGIN GỌI TỪNG PHẦN TRONG SUBMENU__BODY

// Lấy tất cả các mục menu và các phần submenu
const menuItems = document.querySelectorAll('.header__search-item');
const subMenus = document.querySelectorAll('.subMenu__body');

// Hàm ẩn tất cả các submenu
function hideAllMenus() {
    subMenus.forEach(menu => {
        menu.style.display = 'none';
    });
}

// Gán sự kiện click cho từng mục menu
menuItems.forEach((item, index) => {
    item.addEventListener('click', function () {
        // Ẩn tất cả menu trước khi hiển thị menu mới
        hideAllMenus();

        // Xác định menu cần mở dựa trên thứ tự
        const targetId = item.textContent.trim().toLowerCase() + 'Menu';
        const targetMenu = document.getElementById(targetId);

        // Hiển thị menu phù hợp
        if (targetMenu) {
            // Kiểm tra trạng thái hiển thị của submenu
            if (targetMenu.style.display === 'block') {
                targetMenu.style.display = 'none';  // Ẩn nếu đang hiển thị
            } else {
                hideAllMenus();  // Ẩn tất cả trước khi hiển thị mục mới
                targetMenu.style.display = 'block';  // Hiển thị mục mới
            }
        }
    });
});

// Mặc định ẩn tất cả các menu khi tải trang
hideAllMenus();
// END GỌI TỪNG PHẦN TRONG SUBMENU__BODY





