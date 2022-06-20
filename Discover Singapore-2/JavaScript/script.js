function main() {
    
    
    function init() {
        let map = initMap();

        let searchResultLayer = L.layerGroup();
        searchResultLayer.addTo(map);
        

       

        window.addEventListener("DOMContentLoaded", function(){
            
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
        async function tourdata(){
        let touristatt = await axios.get('data/tour.geojson');
        for (let item of touristatt.data.features) {
            console.log(item.geometry.coordinates)
            L.marker(item.geometry.coordinates).addTo(map)
        }
        }
        tourdata()
    }

    init();
}
main();