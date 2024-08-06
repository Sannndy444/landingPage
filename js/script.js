function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
}

function initialize() {
    var propertiPeta = {
        center:new google.maps.LatLng(-7.753525738020103, 113.20667171989645),
        zoom:9,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    
    var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);
    
    // membuat Marker
    var marker=new google.maps.Marker({
        position: new google.maps.LatLng(-7.753525738020103, 113.20667171989645),
        map: peta
    });

}

  // event jendela di-load  
google.maps.event.addDomListener(window, 'load', initialize);