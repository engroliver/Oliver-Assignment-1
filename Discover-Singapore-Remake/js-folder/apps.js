
initMap()

async function touristatt(){
    let response = await axios.get('data/touratt.geojson');
    let tourisattdata = L.geoJson(response.data, {
        onEachFeature: function(feature, layer){
            console.log(feature);
            layer.bindPopup(feature.properties.Description);
        }
    })
    tourisattdata.addTo(map);
    }
    touristatt();