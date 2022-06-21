function addSearchResult(map, result, searchResultLayer) {
    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
    let resultMarker = L.marker(latlng,);
    resultMarker.bindPopup(`
        <h3>${result.name}</h3>
        <p>${result.location.formatted_address}</p>
    `)
    resultMarker.addTo(searchResultLayer);



    // create a search result element
    let resultElement = document.createElement('div');
    resultElement.className = 'search-result';
    resultElement.innerHTML = result.name;
    resultElement.addEventListener('click', function () {
        map.flyTo(latlng, 16);
        resultMarker.openPopup();
        
    })

    document.querySelector("#search-results").appendChild(resultElement);
}


function hotelResult(map, result, hotelLayer) {
    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
    let resultMarker = L.marker(latlng, { icon: hotelicon });
    resultMarker.bindPopup(`
        <h3>${result.name}</h3>
        <p>${result.location.formatted_address}</p>
    `)
    resultMarker.addTo(hotelLayer);

}


function restaurantResult(map, result, restaurantLayer) {
    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
    let resultMarker = L.marker(latlng, { icon: restauranticon });
    resultMarker.bindPopup(`
        <h3>${result.name}</h3>
        <p>${result.location.formatted_address}</p>
    `)
    resultMarker.addTo(restaurantLayer);

}