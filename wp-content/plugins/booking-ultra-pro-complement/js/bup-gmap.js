function initMapBUP() {
  var map = new google.maps.Map(document.getElementById('bup_map_canvas'), {
    zoom: 14,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();

   geocodeAddress(geocoder, map);
}

function geocodeAddress(geocoder, resultsMap) {
 
    var city= jQuery("#bup-map-staff-city").val()	;
	 var address1= jQuery("#bup-map-staff-address").val()	;
	  var country= jQuery("#bup-map-staff-country").val()	;
	  
 	var address = address1 + ", " + city + ", " + country ;
  	geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
     
	  var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
		 title: address
      });
	  
	  
	  
	  var infowindow = new google.maps.InfoWindow({
            content: '<b>' + address + '</b>',
            size: new google.maps.Size(150, 50)
          });

         
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(resultsMap, marker);
          });
		  
    } else {
     // alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}