import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

import { ProfilePage } from '../profile/profile';
import { LoginProvider } from '../../providers/login/login';

declare var google;

@Component({
	selector: 'page-map-modal',
	templateUrl: 'map-modal.html',
	providers: [LoginProvider]

})

export class MapModalPage {
	location:any;
	lat:any;
	lng:any;
	address:any;
	map: GoogleMap;
	searchQuery: any;
 	loader:any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
				private loadingCtrl: LoadingController, private translate: TranslateService,
				private loginProvider: LoginProvider) {

		this.location = navParams.get('param1');
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

		this.presentLoading();
		this.storage.get("userData").then((user)=>{
			
			this.loginProvider.Login(user.nid, user.password).then(token=>{
				
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
					"data" : `{"loc": {"locLat": "${user.loc['locLat']}", "locLong": "${user.loc['locLong']}", "locDesc": "${this.address}"}}`
				}

				$.ajax(settings).done((response)=>{
					// alert("response"+ JSON.stringify(response))
					if(response.success)
					{
						this.loader.dismiss();
						this.navCtrl.setRoot(ProfilePage);

					}else{
						this.loader.dismiss();
						this.translate.get('MAPMODAL_PAGE.loading').subscribe((sesionNotAuthenticated)=>{
							// alert(response.message)
							alert(sesionNotAuthenticated);
						});
					}

				}).fail((error)=>{
					this.loader.dismiss();
					this.translate.get('MAPMODAL_PAGE.loading').subscribe((errorOnUpdateAddress)=>{
						alert(errorOnUpdateAddress);
					});
				});
						
			}).catch(error=>{
				console.log("error on getting token")
			})
		})
	}

	presentLoading() {
	    this.translate.get('MAPMODAL_PAGE.loading').subscribe((loading)=>{
	      this.loader = this.loadingCtrl.create({
	        content: loading
	      });
	      this.loader.present();
	    });
	}
}
