import { Component } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

@Component({
  selector: 'page-bus-track',
  templateUrl: 'bus-track.html',
})
export class BusTrackPage {

	map: GoogleMap;
	p0 = {"lat": 30.044270, "lng": 31.218796};
	p1 = {"lat": 30.046555, "lng": 31.218270};
	p2 = {"lat": 30.047864, "lng": 31.217980};
	p3 = {"lat": 30.048458, "lng": 31.218999};
	p4 = {"lat": 30.048634, "lng": 31.220265};
	p5 = {"lat": 30.048857, "lng": 31.222153};
	p6 = {"lat": 30.048996, "lng": 31.225543};
	p7 = {"lat": 30.049191, "lng": 31.229899};
	p8 = {"lat": 30.049117, "lng": 31.231058};
	p9 = {"lat": 30.048160, "lng": 31.231487};
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
		        target: {lat: 30.048996, lng: 31.225543},
		        zoom: 15,
		        tilt: 20
		    }
	    };

	   	this.map = GoogleMaps.create('map', mapOptions);
	    this.map.one(GoogleMapsEvent.MAP_READY)
		.then(() => {
			// alert("map ready")
			this.map.addPolyline({
				points: [
				  this.p0, this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7, this.p8, this.p9
				],
				'color' : '#AA00FF',
				'width': 5,
				'geodesic': true
			});
		});
    }

    showTodayTrack(){
    	this.map.clear().then(()=> 
			this.ployLine([this.p0, this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7, this.p8, this.p9], '#AA00FF')
		);
    }

	handleChangeDate(date) {
		// console.log("showlast", date)
		this.map.clear().then(()=> 
			this.ployLine([this.p0, this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7, this.p8, this.p9], '#FF0000')
		);
	}    

	ployLine(points, color){
		this.map.addPolyline(
		{
			points: points,
			'color' : color,
			'width': 5,
			'geodesic': true
		})
	}

}
