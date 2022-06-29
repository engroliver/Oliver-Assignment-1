document.querySelector('#btnDirection').addEventListener('click', async function () {

    let startP = document.querySelector("#StartingPoint").value;
    let startll = L.latlng(result.geocodes.main.latitude, result.geocodes.main.longitude);

    let distP = document.querySelector('#Destination').value;
    let distll = L.latlng(result.geocodes.main.latitude, result.geocodes.main.longitude);

    L.Routing.control({
        waypoints: [
            startll,
            distll
        ],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim()
    })
        .on('routeselected', function (e) {
            var route = e.route;
            alert('Showing route between waypoints:\n' + JSON.stringify(route.inputWaypoints, null, 2));
        })
        .addTo(map);


})

