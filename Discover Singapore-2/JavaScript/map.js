function initMap(){

    let centerPoint = [1.3521,103.8198] 
    let map = L.map('map')
    map.setView(centerPoint,12);

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



const touratticon = L.icon({
    iconUrl: 'images/cam-icon.png',
    iconSize: [48, 48],
})

const hotelicon = L.icon({
    iconUrl: 'images/hotel-icon.png',
    iconSize: [50,50],
})


const restauranticon = L.icon({
    iconUrl: 'images/restaurant-icon.png',
    iconSize: [50, 50],
})

const mallicon = L.icon({
    iconUrl: 'images/mall-icon.png',
    iconSize: [50, 50],
})

const  pharmacyicon= L.icon({
    iconUrl: 'images/pharmacy-icon.png',
    iconSize: [50, 50],
})

const gasicon = L.icon({
    iconUrl: 'images/gas-icon.png',
    iconSize: [50, 50],
})