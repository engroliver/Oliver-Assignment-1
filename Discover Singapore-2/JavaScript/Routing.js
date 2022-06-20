// // L.Routing.control({
// //     waypoints: [
// //       L.latLng(57.74, 11.94),
// //       L.latLng(57.6792, 11.949)
// //     ]
// //   }).addTo(map);

  
//   var marker = L.marker([1.3521, 103.8198]).addTo(map);

//   map.on('click', function (e) {
//       console.log(e)
//       var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
//       L.Routing.control({
//           waypoints: [
//               L.latLng(1.3521, 103.8198),
//               L.latLng(e.latlng.lat, e.latlng.lng)
//           ]
//       }).on('routesfound', function (e) {
//           var routes = e.routes;
//           console.log(routes);

//           e.routes[0].coordinates.forEach(function (coord, index) {
//               setTimeout(function () {
//                   marker.setLatLng([coord.lat, coord.lng]);
//               }, 100 * index)
//           })

//       }).addTo(map);
//   });