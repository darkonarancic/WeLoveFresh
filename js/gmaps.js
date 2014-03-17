function createMarker(width, height) {
 
	var canvas, context;
 
	canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
 
	context = canvas.getContext("2d");

	var img = new Image();
	img.src = 'img/time-pointer.png';
	
 	context.drawImage(img, 0, 0);
	
	// var font = "bold " + radius +"px serif";
  	// context.font = font;
	// context.fillStyle = "black";
	// context.fillText ("Hello World", 0, 0);
 	
	return canvas.toDataURL();
 
};

function imgToCanvas(){
	var c = document.getElementById('a');
	c.height = 62;
	c.width = 41;
	var cx = c.getContext('2d');
	cx.fillStyle = "white";
  cx.fillRect(0,0, 200, 200);
  // draw font in red
  cx.fillStyle = "red";
  cx.font = "20pt sans-serif";
  cx.fillText("Canvas Rocks!", 5, 100);
  cx.strokeText("Canvas Rocks!", 5, 130);
	

}

function writeText(){
	var c = document.getElementById('a');
	c.height = 62;
	c.width = 41;
	var cx = c.getContext('2d');
	cx.fillStyle="rgba(12,33,241,1)";
	cx.font="30px Arial";
	cx.fillText("Hello",0,0);
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
		// This marker is 129 pixels wide by 42 pixels tall.
		new google.maps.Size(39, 59),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image is the base of the flagpole at 18,42.
		new google.maps.Point(18, 42)
	);
	
	var imageTrack = new google.maps.MarkerImage('img/track-pointer.png',
		// This marker is 129 pixels wide by 42 pixels tall.
		new google.maps.Size(39, 59),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image is the base of the flagpole at 18,42.
		new google.maps.Point(18, 42)
	);
	
	var imageTime = new google.maps.MarkerImage('img/time-pointer.png',
		// This marker is 129 pixels wide by 42 pixels tall.
		new google.maps.Size(41, 62),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image is the base of the flagpole at 18,42.
		new google.maps.Point(18, 42)
	);
	
     var iw1 = new google.maps.InfoWindow({
       content: "Home For Sale"
     });

	// Add Marker
	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(userLat, userLng),
		map: map,
		icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
	});
	
	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(trackLan, trackLng),
		map: map,
		icon: imageTrack // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
	});
	
	var marker3 = new google.maps.Marker({
		position: new google.maps.LatLng(timeLan, timeLng),
		map: map,
		icon: imgToCanvas() // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
		
	});
}
imgToCanvas();
google.maps.event.addDomListener(window, 'load', initialize);