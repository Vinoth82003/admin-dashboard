console.log('script.js');
console.clear();

const listBtns = document.querySelectorAll(".inner-list");

listBtns.forEach(list => {
    list.addEventListener("click", () => {
        listBtns.forEach(btn => {
            btn.classList.remove("active");
            btn.parentElement.classList.remove("active");
        });

        // Toggle the "active" class on the clicked list
        if (!list.classList.contains("active")) {
            list.classList.add("active");
        } else {
            list.classList.remove("active");
        }

        if (list.classList.contains("group-list")) {
            list.parentElement.classList.toggle("active");
        }
    });
});


const toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener("click", () => {
    toggle_menu.classList.toggle("active");
    document.querySelector(".sidemenu").classList.toggle("active");
    document.querySelector(".fiexed").classList.toggle("active");
});

const innerList = document.querySelectorAll(".option-inner-list");

innerList.forEach(list => {
    list.addEventListener("click", () => {
        innerList.forEach(inner => {
            inner.classList.remove("active");
        });
        list.classList.add("active");
    })
});

document.addEventListener('DOMContentLoaded', function () {
    const sideMenuItems = document.querySelectorAll('.inner-list, .options');
    const pathContainer = document.querySelector('.path-container .path');
    const iframeContainer = document.querySelector('.main iframe');

    sideMenuItems.forEach(item => {
        item.addEventListener('click', function () {
            const clickedItemText = this.querySelector('.text').textContent;
            const parentText = this.closest('.menu-list').querySelector('.text').textContent;
            const fileName = clickedItemText.toLowerCase().replace(' ', '-') + '.html';

            // Set the path text
            pathContainer.textContent = parentText + (parentText && clickedItemText ? ' / ' : '') + clickedItemText;

            // Attempt to load the file and check the response status
            fetch(fileName)
                .then(response => {
                    if (response.ok) {
                        // File exists, set the iframe src
                        iframeContainer.src = fileName;
                    } else {
                        // File doesn't exist, handle accordingly (e.g., display an error)
                        console.error(`File not found: ${fileName}`);
                        // Optionally, you can set a default URL or display an error message
                        // iframeContainer.src = 'default.html';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    });
});


const profile_card = document.querySelector(".profile-card");

profile_card.addEventListener("click", () => {
    document.querySelector(".inner-nav-list").classList.toggle("active");
})