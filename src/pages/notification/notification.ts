import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';


@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

	notification:any;
	map;

	constructor(public navParams: NavParams, private googleMaps: GoogleMaps) {
		this.notification = this.navParams.get("param1");
		this.loadMap(this.notification["locLat"], this.notification["locLong"], this.notification["locDesc"]);
	}

	loadMap(x, y, desc) {

		let mapOptions: GoogleMapOptions = {
			camera: {
				target: {
	                lat: x,
	                lng: y
	              },
				zoom: 18,
				tilt: 15
			}
		};

		this.map = this.googleMaps.create('map', mapOptions);

		this.map.one(GoogleMapsEvent.MAP_READY)
      	.then(() => {
	        console.log('Map is ready!');

	        // Now you can use all methods safely.
	        this.map.addMarker({
	            title: desc,
	            icon: 'red',
	            animation: 'DROP',
	            position: {
	              lat: x,
	              lng: y
	            }
	        })

	    });
		
	}

}
