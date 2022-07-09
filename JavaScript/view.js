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


function mallResult(map, result, mallLayer) {
    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
    let resultMarker = L.marker(latlng, { icon: mallicon });
    resultMarker.bindPopup(`
        <h3>${result.name}</h3>
        <p>${result.location.formatted_address}</p>
    `)
    resultMarker.addTo(mallLayer);

}

function pharmacyResult(map, result, pharmacyLayer) {
    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
    let resultMarker = L.marker(latlng, { icon: pharmacyicon });
    resultMarker.bindPopup(`
        <h3>${result.name}</h3>
        <p>${result.location.formatted_address}</p>
    `)
    resultMarker.addTo(pharmacyLayer);

}

function gasResult(map, result, gasLayer) {
    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
    let resultMarker = L.marker(latlng, { icon: gasicon });
    resultMarker.bindPopup(`
        <h3>${result.name}</h3>
        <p>${result.location.formatted_address}</p>
    `)
    resultMarker.addTo(gasLayer);

}


// function addtouristattLayer(map,touristattLayer) {
//     let latlng = ([data.features[55].geometry.coordinates[1], data.features[55].geometry.coordinates[1]], { icon: touratticon })
//     let attMarker = L.marker(latlng,);
//     attmarker.bindPopup(`<h4>${item.properties.Name}</h4>
//                                 <p>${item.properties.description}<p>
//                                 <p>${item.properties.ADDRESSSTREETNAME}<p>
//                                 <img src="${item.properties.PHOTOURL}"class="center" width="70%" display:block/>

//                                                                          `)
//     attMarker.addTo(touristattLayer);


//     document.querySelector("#mirlionBtn").addEventListener('click',async function(){
//             map.flyTo(latlng, 16);
//             attMarker.openPopup();



  

//     })


// }


