function initMap(){

    let centerPoint = [1.3521,103.8198] 
    let map = L.map('map')
    map.setView(centerPoint,13);
    
    let tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZW5ncm9saXZlciIsImEiOiJjbDRhcWVtOGcwNmNiM2JucHZkbngycmZvIn0.Zi8uHI71NTEezC5PZG9sbg' 


        
    }).addTo(map);

    return map;


    
}
