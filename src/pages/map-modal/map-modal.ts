import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

import { ProfilePage } from '../profile/profile';
import { LoginProvider } from '../../providers/login/login';
import { GetChildrenProvider } from '../../providers/get-children/get-children';


declare var google;

@Component({
  selector: 'page-map-modal',
  templateUrl: 'map-modal.html',
  providers: [LoginProvider, GetChildrenProvider]
})

export class MapModalPage {
	location:any;
	lat:any;
	lng:any;
	address:any;
	map: GoogleMap;
	searchQuery: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
				private loginProvider: LoginProvider, private getChildrenProvider: GetChildrenProvider) {

		this.location = navParams.get('param1');
		console.log("location ", this.location)
		this.loadMap(this.location["locLat"], this.location["locLong"]);
	}

	loadMap(x,y) {
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

        this.map = GoogleMaps.create('map', mapOptions);
        this.map.one(GoogleMapsEvent.MAP_READY)
      	.then(() => {
      		console.log("map ready")
	        this.map.addMarker({
	            title: 'Your Previous Address',
	            icon: 'red',
	            animation: 'DROP',
	            position: {
	              lat: x,
	              lng: y
	            }
	        })
	    });

	    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
	    	console.log('Map is ready!');
	        this.map.addEventListener(GoogleMapsEvent.MAP_CLICK).subscribe((data)=>{

	        	console.log("data", JSON.stringify(data))

	          	this.map.clear().then(()=>{
		            this.lat = data[0]['lat'];
		            this.lng = data[0]['lng'];

		            let mapOption: GoogleMapOptions = {
		                camera: {
		                  target: {
		                    lat: this.lat,
		                	lng: this.lng
		                  },
		                  zoom: 15,
		                  tilt: 30
		                }
		              };

		            this.map.setOptions(mapOption);
		            this.map.setMyLocationEnabled(true);

		            // Now you can use all methods safely.
		            this.map.addMarker({
		              title: "your location",
		              icon: 'red',
		              animation: 'DROP',
		              position: {
		                lat: this.lat,
		                lng: this.lng
		              }
		            })

		            this.getAddress(this.lat, this.lng);
	            	this.location = {'lat': this.lat, 'lng': this.lng}
					// alert("location"+ this.location);
	          	});
	        })

	        this.map.setMyLocationEnabled(true);
	    });
    }

	// function to geocode a lat/long
	getAddress(myLatitude,myLongitude) {
	    var geocoder  = new google.maps.Geocoder();
	    var location  = new google.maps.LatLng(myLatitude, myLongitude);
	    geocoder.geocode({'latLng': location}, (results, status) => {
	    	if(status == google.maps.GeocoderStatus.OK) {
	    		this.address = results[0].formatted_address;       
	        } else {
		        alert("Geocode failure: " + status);
		        return false;
	        }
	    });
	}
	  
	codeAddress() {

	    let loc = {};

	    if (this.searchQuery != undefined) {
	    	var geocoder  = new google.maps.Geocoder();

	      	geocoder.geocode( { 'address': this.searchQuery},(results, status) => {

		        loc["lat"] = results[0].geometry.location.lat();
		        loc["lng"] = results[0].geometry.location.lng();

		        if (status == google.maps.GeocoderStatus.OK) {

		            this.map.clear().then(()=>{
			            this.map.addMarker({
			              title: this.searchQuery,
			              icon: 'red',
			              animation: 'DROP',
			              position: results[0].geometry.location
			            })

			            this.address = this.searchQuery;
			            this.location = loc;

			            let mapOption: GoogleMapOptions = {
			              camera: {
			                target: this.location,
			                zoom: 10,
			                tilt: 30
			              }
			            };

			            this.map.setOptions(mapOption);
			            this.searchQuery = '';

		            }).catch(()=>{
		            console.log("clear map")
		            })

		        } else {
		          // alert("Geocode was not successful for the following reason: " + status);
		        }
	        });
	    }
	}

	dismiss() {

		this.storage.get("userData").then((user)=>{
			if (this.address) {
				user.address = this.address;
			}
			if (this.location['lat']) {
				user.loc['locLat'] = this.location.lat;
				user.loc['locLong'] = this.location.lng;
			}else{
				user.loc = this.location;
			}
			this.storage.set("userData", user);
			this.storage.get("token").then((token)=>{
				
				var settings = {
					"async": true,
					"crossDomain": true,
					"url": "http://ec2-18-220-223-50.us-east-2.compute.amazonaws.com:9876/edit?token="+token,
					"method": "POST",
					"headers": {
					"content-type": "application/json",
					"cache-control": "no-cache",
					"postman-token": "aa50dfb0-9c6d-a871-8fef-d6fbcaf228d1"
					},
					"processData": false,
					"data": `{"loc": {"locLat": user.loc['locLat'],"locLong": user.loc['locLong'],"locDesc": user.loc['locDesc']}}`
				}

				$.ajax(settings).done((response)=>{

					if(response.success)
					{
						this.loginProvider.Login(user.nid, user.password).then((newToken)=>{
							
							this.getChildrenProvider.getAllChildren(newToken).then((flag)=>{
						        if (flag) {
									this.navCtrl.setRoot(ProfilePage);
						        }
						    }).catch((error1)=>{
						        alert(error1);
						    });
						})
					}else{
						alert("error during saving data")
					}

				}).fail((error)=>{
					alert("error during saving data")
				});
			})			
		})
	}
}
