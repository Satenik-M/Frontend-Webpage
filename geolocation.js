window.onload = geolocateUser;
function geolocationSuccess(position) {
    var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


    var myOptions = {
        zoom: 16,
        center: userLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // Draw the map
    var mapObject = new google.maps.Map(document.getElementById("geolocation"), myOptions);
    // Place the marker
    new google.maps.Marker({
        map: mapObject,
        position: userLatLng
    });

}

function geolocationError(positionError) {
    document.getElementById("geolocation").innerHTML += "Error: " + positionError.message + "<br />";
}

function geolocateUser() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
    }
    else
        document.getElementById("geolocation").innerHTML += "Your browser doesn't support the Geolocation API";
}

