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

            document.querySelector("#toggleSearchBtn").addEventListener('click', function(){
                let searchContainerElement =  document.querySelector("#search-container");
                let currentDisplay = searchContainerElement.style.display;
                if (! currentDisplay  || currentDisplay == 'none') {
                    // if the search container is hidden, show it
                    searchContainerElement.style.display = 'block';
                } else {
                    // if the searc container is visible, then hide it
                    searchContainerElement.style.display = 'none';
                }
            })


        })
    }

    init();
}
main();