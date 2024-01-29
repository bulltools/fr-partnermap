// Initialize the map
var map = L.map('distributors').setView([50, -20], 3);
// var map = L.map('distributors').setView([55, 25], 3);



// Mapbox tile layer (eksternt library som giver mulighed for at tilpasse kortet)


L.tileLayer('https://api.mapbox.com/styles/v1/flowgab/cloyku9q8002g01qu62cl63n5/tiles/512/{z}/{x}/{y}?access_token=' + process.env.AT, {
    maxZoom: 10,
    minZoom: 3,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);

function addMarker(lat, lng, name, desc, contact, link, logoUrl, country, isActive = false) {
    var scaledWidth = 61 / 2;
    var scaledHeight = 95 / 2;

    var iconFile = isActive ? 'blue_pin.svg' : 'darkblue_pin.svg';
    var flowIcon = L.icon({
        iconUrl: './assets/' + iconFile,
        shadowUrl: './assets/shadow.svg',
        iconSize: [scaledWidth, scaledHeight],
        shadowSize: [20, 70],
        iconAnchor: [scaledWidth / 2, scaledHeight],
        shadowAnchor: [scaledWidth / 25, scaledHeight - 1],
    });

    var marker = L.marker([lat, lng], { icon: flowIcon }).addTo(map);

    // Marker click event
    marker.on('click', function () {
        setActiveMarker(marker);
        // var iconHtml = "<img class='distributor-icon' src='" + logoUrl + "'>";
        // TODO 🟢: Tilføj land på en lækker måde; code is here:  ${" " + "(" + country + ")"}
        var iconHtml= `<img class='distributor-icon' src='${logoUrl}'>`
        var content = `${iconHtml}<br><b>${name}</b><br><div>${desc}</div><br><a class='distributor-link' href='${contact}'>${contact ? "Send email" : ""}</a> ${contact ? "|" : ""} <a class='distributor-link' href='${link}' target='_blank'>Visit website</a>`;
        document.getElementById('corner-popup').innerHTML = content;
        document.getElementById('corner-popup').style.display = 'block'; // Show the corner popup
    });
}

var activeMarker = null;
function setActiveMarker(marker) {
    if (activeMarker) {
        // Reset previous active marker icon
        var oldIcon = activeMarker.getIcon();
        oldIcon.options.iconUrl = './assets/darkblue_pin.svg';
        activeMarker.setIcon(oldIcon);
    }

    // Set new active marker icon
    var newIcon = marker.getIcon();
    newIcon.options.iconUrl = './assets/blue_pin.svg';
    marker.setIcon(newIcon);

    activeMarker = marker;
}

function closePopup() {
    document.getElementById('corner-popup').style.display = 'none';
}


// Function to load and add a GeoJSON layer
// function addGeoJsonLayer(url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             L.geoJSON(data, {
//                 // You can add styling options here if needed
//             }).addTo(map);
//         })
//         .catch(error => console.error('Error loading the GeoJSON data:', error));
// }

// Load and add the Denmark GeoJSON layer
// addGeoJsonLayer('boundaries/Denmark.json');

loadDistributors();


