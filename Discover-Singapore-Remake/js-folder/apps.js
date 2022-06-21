document.querySelector("#tourist-icon")
.addEventListener('click',async function tourdata(){
    let touristatt = await axios.get("data/tour.geojson");
    let touristattLayer = L.layerGroup();
    for (let item of touristatt.data.features) {
        console.log(item.geometry.coordinates);
        let marker = L.marker([item.geometry.coordinates[1], item.geometry.coordinates[0]]).addTo(touristattLayer);
        marker.bindPopup(`<h2>${item.properties.Name}<h2>
                                <p>${item.properties.description}<p>
                                <img src="${item.properties.PHOTOURL}"/>
                                                                         `)
    }
    touristattLayer.addTo(map)
})
tourdata();