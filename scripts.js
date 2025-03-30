document.addEventListener('DOMContentLoaded', function () {
    const storeBtn = document.getElementById('our-store-btn');
    if (storeBtn) {
        storeBtn.addEventListener('click', function () {
            window.location.href = '404.html';
        });
    }

    const chefsBtn = document.getElementById('meet-chefs-btn');
    if (chefsBtn) {
        chefsBtn.addEventListener('click', function () {
            window.location.href = '404.html';
        });
    }

    const recipesBtn = document.getElementById('our-recipes-btn');
    if (recipesBtn) {
        recipesBtn.addEventListener('click', function () {
            window.location.href = '404.html';
        });
    }

    document.getElementById('see-gallery-btn').addEventListener('click', function () {
        window.location.href = '404.html';
    });
});