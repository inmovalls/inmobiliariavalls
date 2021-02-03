const mapScript = () => {
    let map
    map = new google.maps.Map(document.getElementById("mapView"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

export default mapScript