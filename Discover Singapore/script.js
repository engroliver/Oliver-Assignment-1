function main (){
    function init(){
        let map = initMap();

        let searchResultLayer = L.layerGroup();
        searchResultLayer.addTo(map); 
       

    window.addEventListener("DOMContentLoaded",function(){

        document.querySelector("#btnSearch").addEventListener('click',async function(){
            let query = document.querySelector('#textInput').value;
            let center = map.getBounds().getCenter();
            let data = await search (center.lat, center.lng, query);
           for (let result of data.results ){
               let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude]
               let resultMarker = L.marker(latlng);
               resultMarker.addTo(searchResultLayer);
           }
        })



})

}

init();

}
main();