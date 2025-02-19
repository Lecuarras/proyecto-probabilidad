function iniciarMap(){
    var coord = {lat:19.70254839035573 ,lng: -101.25487080314271};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
