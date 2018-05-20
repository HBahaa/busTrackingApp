import { Component } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

@Component({
  selector: 'page-bus-track',
  templateUrl: 'bus-track.html',
})
export class BusTrackPage {

	map: GoogleMap;
	x = {"lat": 25.5, "lng": 29.2};
	y = {"lat": 27.7, "lng": 29.7};
	z = {"lat": 30, "lng": 30};
	date: string;

	constructor() {
		this.date = new Date().toISOString();
	}


	ionViewDidLoad() {
		this.loadMap();
	}

	loadMap() {
		// alert("loadMap")
	    let mapOptions: GoogleMapOptions = {
	    	camera: {
		        target: {lat: 27.7, lng: 29.7},
		        zoom: 6,
		        tilt: 20
		    }
	    };

	   	this.map = GoogleMaps.create('map', mapOptions);
	    this.map.one(GoogleMapsEvent.MAP_READY)
		.then(() => {
			// alert("map ready")
			this.map.addPolyline({
				points: [
				  this.x,
				  this.y,
				  this.z
				],
				'color' : '#AA00FF',
				'width': 5,
				'geodesic': true
			});
		});
    }

    showTodayTrack(){
    	this.map.clear().then(()=> 
			this.ployLine(this.x, this.y, '#AA00FF')
		);
    }

	handleChangeDate(date) {
		// console.log("showlast", date)
		this.map.clear().then(()=> 
			this.ployLine({"lat": 24.0283, "lng": 30.7}, {"lat": 29.01929, "lng": 30.7}, '#FF0000')
		);
		
	}    

	ployLine(x, y, color){
		this.map.addPolyline(
		{
			points: [
			  x,
			  y
			],
			'color' : color,
			'width': 5,
			'geodesic': true
		})
	}

}
