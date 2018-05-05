import { Component } from '@angular/core';
import { NavController, Platform, ToastController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
import { TranslateService } from '@ngx-translate/core';
import { Register2Page } from '../register2/register2';

declare var google;

@Component({
  selector: 'map-page',
  templateUrl: 'map.html'
})
export class MapPage {
 
  map: GoogleMap;
  lat: any;
  lng: any;
  location: any;
  address: any;
  searchQuery: any;

 
  constructor(public navCtrl: NavController, public platform: Platform, private googleMaps: GoogleMaps,
    private toastCtrl: ToastController, private translate: TranslateService) {

    platform.ready().then(() => {
        this.loadMap();
        this.translate.get('MAP_PAGE.toast1').subscribe((toast1)=>{
          this.presentToast(toast1, 5000, 'top');
        })
    });
  }
 
  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        zoom: 18,
        tilt: 15
      }
    };

    this.map = this.googleMaps.create('map', mapOptions);

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

        this.map.getMyLocation().then((location)=>{
          this.lat = location['latLng']['lat'];
          this.lng = location['latLng']['lng'];
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
            // console.log("clear map")
          })

        } else {
          // alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }
    else if (this.searchQuery == undefined) {
      this.translate.get('MAP_PAGE.toast2').subscribe((toast2)=>{
        this.presentToast(toast2, 4000, "bottom");
      });

    }
  }

  presentToast(msg, t, pos) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: t,
      position: pos
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  goToRegister(){
    this.navCtrl.setRoot(Register2Page, {'param1': this.address, 'param2': this.location})
  }

}