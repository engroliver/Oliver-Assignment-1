document.querySelector('#home-page').addEventListener('click', function () {
    // hide all the existing pages
    let allPages = document.querySelectorAll('.All-page');
    for (let page of allPages) {
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    // display page 1
    let home = document.querySelector('#Homepage');
    home.classList.add('show');
    home.classList.remove('hidden');
})
document.querySelectorAll('.nav-link').addEventListener('click', function () {
    // hide all the existing pages
    let allPages = document.querySelectorAll('.All-page');
    for (let page of allPages) {
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    // display page 2
    let mapPage = document.querySelector('#map-container');
    mapPage.classList.add('show');
    mapPage.classList.remove('hidden');
})