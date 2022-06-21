function main() {
    
    
    function init() {
        let map = initMap();

        let searchResultLayer = L.layerGroup();
        searchResultLayer.addTo(map);

        let hotelLayer = L.markerClusterGroup();
        hotelLayer.addTo(map);

        let restaurantLayer = L.markerClusterGroup();
        restaurantLayer.addTo(map);

       

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

            document.querySelector('#hotels-icon').addEventListener('click',async function(){
                
                hotelLayer.clearLayers();
            
                let query = document.querySelector("#txtQuery").hotel;
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query)

                // remove all search results
                document.querySelector("#search-results").innerHTML = "";

                for(let result of data.results) {
                    hotelResult(map, result, hotelLayer)}
            })
            document.querySelector('#restaurant-icon').addEventListener('click', async function () {

                restaurantLayer.clearLayers();

                let query = document.querySelector("#txtQuery").restaurant;
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query)

                // remove all search results
                document.querySelector("#search-results").innerHTML = "";

                for (let result of data.results) {
                    restaurantResult(map, result, restaurantLayer)
                }
            })


        })
     
        document.querySelector("#tourist-icon").addEventListener('click', async function tourdata() {
                
                let touristatt = await axios.get("data/tour.geojson");
                let touristattLayer = L.markerClusterGroup();
                for (let item of touristatt.data.features) {
                    console.log(item.geometry.coordinates);
                    let marker = L.marker([item.geometry.coordinates[1], item.geometry.coordinates[0]], { icon: touratticon }).addTo(touristattLayer);
                    marker.bindPopup(`<h4>${item.properties.Name}</h4>
                                <p>${item.properties.description}<p>
                                <p>${item.properties.ADDRESSSTREETNAME}<p>
                                                                         `)
                }
                touristattLayer.addTo(map)
            })
      
        
    }

    init();
}
main();