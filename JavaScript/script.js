function main() {


    function init() {

        let map = initMap();

        let searchResultLayer = L.markerClusterGroup();
        searchResultLayer.addTo(map);

        let hotelLayer = L.markerClusterGroup();
        hotelLayer.addTo(map);

        let restaurantLayer = L.markerClusterGroup();
        restaurantLayer.addTo(map);

        let mallLayer = L.markerClusterGroup();
        mallLayer.addTo(map);

        let pharmacyLayer = L.markerClusterGroup();
        pharmacyLayer.addTo(map);

        let gasLayer = L.markerClusterGroup();
        gasLayer.addTo(map);

        let touristattLayer = L.markerClusterGroup();
        touristattLayer.addTo(map);



        window.addEventListener("DOMContentLoaded", function () {

            document.querySelector("#btnSearch").addEventListener('click', async function () {


                // clear any existing search markers
                searchResultLayer.clearLayers();
                hotelLayer.clearLayers();
                restaurantLayer.clearLayers();
                mallLayer.clearLayers();
                pharmacyLayer.clearLayers();
                gasLayer.clearLayers();
                touristattLayer.clearLayers();


                let query = document.querySelector("#txtQuery").value;
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query);

                // remove all search results
                document.querySelector("#search-results").innerHTML = "";

                for (let result of data.results) {
                    addSearchResult(map, result, searchResultLayer);

                }
            })

            document.querySelector('#hotels-icon').addEventListener('click', async function () {
                searchResultLayer.clearLayers();
                hotelLayer.clearLayers();
                restaurantLayer.clearLayers();
                mallLayer.clearLayers();
                pharmacyLayer.clearLayers();
                gasLayer.clearLayers();
                touristattLayer.clearLayers();


                let query = "hotels";
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query)

                // remove all search results
                document.querySelector("#search-results").innerHTML = "";

                for (let result of data.results) {
                    hotelResult(map, result, hotelLayer)
                }
            })
            document.querySelector('#restaurant-icon').addEventListener('click', async function () {
                searchResultLayer.clearLayers();
                restaurantLayer.clearLayers();
                hotelLayer.clearLayers();
                mallLayer.clearLayers();
                pharmacyLayer.clearLayers();
                gasLayer.clearLayers();
                touristattLayer.clearLayers();


                let query = "restaurant";
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query)

                // remove all search results
                document.querySelector("#search-results").innerHTML = "";

                for (let result of data.results) {
                    restaurantResult(map, result, restaurantLayer)
                }
            })
            document.querySelector('#mall-icon').addEventListener('click', async function () {
                searchResultLayer.clearLayers();
                mallLayer.clearLayers();
                hotelLayer.clearLayers();
                restaurantLayer.clearLayers();
                pharmacyLayer.clearLayers();
                gasLayer.clearLayers();
                touristattLayer.clearLayers();


                let query = "malls";
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query)

                // remove all search results
                document.querySelector("#search-results").innerHTML = "";

                for (let result of data.results) {
                    mallResult(map, result, mallLayer)
                }
            })

            document.querySelector('#pharmacies-icon').addEventListener('click', async function () {
                searchResultLayer.clearLayers();
                pharmacyLayer.clearLayers();
                hotelLayer.clearLayers();
                restaurantLayer.clearLayers();
                mallLayer.clearLayers();
                gasLayer.clearLayers();
                touristattLayer.clearLayers();


                let query = "pharmacy";
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query)

                // remove all search results
                document.querySelector("#search-results").innerHTML = "";

                for (let result of data.results) {
                    pharmacyResult(map, result, pharmacyLayer)
                }
            })

            document.querySelector('#gas-icon').addEventListener('click', async function () {
                searchResultLayer.clearLayers();
                gasLayer.clearLayers();
                hotelLayer.clearLayers();
                restaurantLayer.clearLayers();
                mallLayer.clearLayers();
                pharmacyLayer.clearLayers();
                touristattLayer.clearLayers();


                let query = "gas";
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query)

                // remove all search results
                document.querySelector("#search-results").innerHTML = "";

                for (let result of data.results) {
                    gasResult(map, result, gasLayer)
                }
            })


        })

        document.querySelector("#tourist-icon").addEventListener('click', async function tourdata() {
            searchResultLayer.clearLayers();
            hotelLayer.clearLayers();
            restaurantLayer.clearLayers();
            mallLayer.clearLayers();
            pharmacyLayer.clearLayers();
            gasLayer.clearLayers();
            touristattLayer.clearLayers();
            
            document.querySelector("#search-results").innerHTML = "";

            let touristatt = await axios.get("data/tour.geojson");

            for (let item of touristatt.data.features) {
                // console.log(item.geometry.coordinates);
                let marker = L.marker([item.geometry.coordinates[1], item.geometry.coordinates[0]], { icon: touratticon }).addTo(touristattLayer);
                marker.bindPopup(`<h4>${item.properties.Name}</h4>
                                <p>${item.properties.description}<p>
                                <p>${item.properties.ADDRESSSTREETNAME}<p>
                                <img src="${item.properties.PHOTOURL}"class="center" width="70%" display:block/>

                                                                         `)
            }
            touristattLayer.addTo(map)



        })


        // CARDS
        // document.querySelector("#mirlionBtn").addEventListener('click',async function mirlion() {
        // })


        // document.querySelector('#btnDirection').addEventListener('click', async function () {

        //     let startP = document.querySelector("#StartingPoint").value;
        //     let startll = L.latlng(result.geocodes.main.latitude, result.geocodes.main.longitude);

        //     let distP = document.querySelector('#Destination').value;
        //     let distll = L.latlng(result.geocodes.main.latitude, result.geocodes.main.longitude);


        // })

        //  Routing
        let routingControl = L.Routing.control({
            waypoints: [
                L.latLng(0, 0),
                L.latLng(0, 0)
            ],
            routeWhileDragging: true,
            geocoder: L.Control.Geocoder.nominatim()
        })

        document.querySelector('#direction-icon').addEventListener('click', async function () {


            if (!map.hasLayer(routingControl)
            )
                routingControl.addTo(map)

        })





    }





    init();

}
main();
