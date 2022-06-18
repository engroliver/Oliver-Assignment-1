let tourLocation = document.querySelector('#tourist-icon')





function main() {
    
    
    function init() {
        let map = initMap();

        let searchResultLayer = L.layerGroup();
        searchResultLayer.addTo(map);

        window.addEventListener("DOMContentLoaded", function(){
            //touristData
            // let touristreq = axius.get('data/TOURISM.geojson');
            // let touristAttRes = await touristreq;
            // touristAttData = touristAttRes.data;
            // touristAttLayer = loadGeoJsonLayer()

            document.querySelector("#btnSearch").addEventListener('click', async function(){

                // clear any existing search markers
                searchResultLayer.clearLayers();

                let query = document.querySelector("#txtQuery").value;
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query);

                // remove all search results
                document.querySelector("#search-results").innerHTML = "";

                for (let result of data.results) {
                    addSearchResult(map, result, searchResultLayer);
              
                }
            })




        })
    }

    init();
}
main();