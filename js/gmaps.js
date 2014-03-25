var time = "16:00"; // example

function drawCustomPointer(time){
	var c = document.getElementById('a');
	c.height = 64;
	c.width = 44;
	var cx = c.getContext('2d');
	
	cx.beginPath();
	cx.moveTo(1, 21);
	cx.bezierCurveTo(1, -6, 40, -6, 40, 20);
	cx.bezierCurveTo(40, 29, 29, 52, 20, 62);
	cx.bezierCurveTo(12, 52, 1, 30, 1, 20);
	
	
	cx.closePath();
    cx.lineWidth = 2;
	cx.fillStyle = "#fff";
    cx.strokeStyle = '#17282f';
    cx.stroke();
    cx.fill();
	
	// draw font in bluev
	cx.fillStyle = "#042335";
	cx.font = "9pt sans-serif";
	cx.textAlign="center"; 
	cx.fillText(time, 20, 28);
	
	return c.toDataURL();
}

function initialize() {
	//------- Google Maps ---------//
	var map_canvas = document.getElementById('map_div');
	
	var userLat = 52.375685;
	var userLng = 4.896535;
	
	var trackLan = 52.370864;
	var trackLng = 4.892759;
	
	var timeLan = 52.373563;
	var timeLng = 4.890978;
	
	var myLatLng = new google.maps.LatLng(52.372790, 4.893038);

	// Creating an object literal containing the properties we want to pass to the map
	var map_options = {
      center: new google.maps.LatLng(52.372790, 4.893038),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  	};
	// Calling the constructor, thereby initializing the map
	var map = new google.maps.Map(map_canvas, map_options);
	
	// Creating a LatLng object containing the coordinate for the center of the map
	var latlng = new google.maps.LatLng(userLat,userLng);

	// Define Marker properties
	var image = new google.maps.MarkerImage('img/user-pointer.png',
		new google.maps.Size(39, 59),
		new google.maps.Point(0,0),
		new google.maps.Point(18, 42)
	);
	
	var imageTrack = new google.maps.MarkerImage('img/track-pointer.png',
		new google.maps.Size(39, 59),
		new google.maps.Point(0,0),
		new google.maps.Point(18, 42)
	);
	
	var imageTime = new google.maps.MarkerImage('img/time-pointer.png',
		new google.maps.Size(41, 62),
		new google.maps.Point(0,0),
		new google.maps.Point(18, 42)
	);
	

	// Add Marker
	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(userLat, userLng),
		map: map,
		icon: image
	});
	
	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(trackLan, trackLng),
		map: map,
		icon: imageTrack 
	});
	
	 var marker3 = new google.maps.Marker({
		position: new google.maps.LatLng(timeLan, timeLng),
		map: map,
		icon: drawCustomPointer(time)
 		
	 });
}
google.maps.event.addDomListener(window, 'load', initialize);