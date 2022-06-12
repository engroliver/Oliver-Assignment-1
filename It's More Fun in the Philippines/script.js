function main (){
function init(){
let map = initMap();

    window.addEventListener("DOMContentLoaded",function(){

        document.querySelector('#btnSearch').addEventListener('click',async function(){
            let query = document.querySelector('#textInput').value;
            let center = map.getBounds().getCenter();
            let result = await search (center.lat,center.lng, query);
            console.log(result)
        })



})

}

init();

}
main();