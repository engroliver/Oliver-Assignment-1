document.querySelector('#home-icon').addEventListener('click', function () {
    // hide all the existing pages
    let allPages = document.querySelectorAll('.All-pages');
    for (let page of allPages) {
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    // display page 1
    let home = document.querySelector('#Homepage');
    home.classList.add('show');
    home.classList.remove('hidden');
})
let nav = document.querySelectorAll('.portal')
for (let n of nav){
    n.addEventListener('click', function () {
        // hide all the existing pages
        let allPages = document.querySelectorAll('.All-pages');
        for (let page of allPages) {
            page.classList.add('hidden');
            page.classList.remove('show');
        }

        // display page 2
        let mapPage = document.querySelector('#map-container');
        mapPage.classList.add('show');
        mapPage.classList.remove('hidden');
    })

}

// document.querySelector("#mirlionBtn").addEventListener('click',function(){

//     // hide all the existing pages
//     let allPages = document.querySelectorAll('.All-pages');
//     for (let page of allPages) {
//         page.classList.add('hidden');
//         page.classList.remove('show');
//     }

//     // display page 2
//     let mapPage = document.querySelector('#map-container');
//     mapPage.classList.add('show');
//     mapPage.classList.remove('hidden');


    
// })
// document.querySelector("#MarinaBtn").addEventListener('click', function () {

//     // hide all the existing pages
//     let allPages = document.querySelectorAll('.All-pages');
//     for (let page of allPages) {
//         page.classList.add('hidden');
//         page.classList.remove('show');
//     }

//     // display page 2
//     let mapPage = document.querySelector('#map-container');
//     mapPage.classList.add('show');
//     mapPage.classList.remove('hidden');



// })
// document.querySelector("#GardenBtn").addEventListener('click', function () {

//     // hide all the existing pages
//     let allPages = document.querySelectorAll('.All-pages');
//     for (let page of allPages) {
//         page.classList.add('hidden');
//         page.classList.remove('show');
//     }

//     // display page 2
//     let mapPage = document.querySelector('#map-container');
//     mapPage.classList.add('show');
//     mapPage.classList.remove('hidden');



// })



