import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'page-device-track',
  templateUrl: 'device-track.html',
})
export class DeviceTrackPage {
  map: GoogleMap;
  lat: any;
  lng: any;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.loadMap()
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map', mapOptions);    
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
          var infoWindow = new google.maps.InfoWindow({
          content: contentString
        });
        this.map.addMarker({
          title: 'Location',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              infoWindow.open(marker);
            });
        });

      });

      var contentString = `
        <ion-fab>
          <button ion-fab color="danger"><ion-icon name="md-share"></ion-icon></button>
          <ion-fab-list side="top">
            <button ion-fab color="primary"><ion-icon name="logo-vimeo"></ion-icon></button>
          </ion-fab-list>
          <ion-fab-list side="bottom">
            <button ion-fab color="secondary"><ion-icon name="logo-facebook"></ion-icon></button>
          </ion-fab-list>
          <ion-fab-list side="left">
            <button ion-fab color="light"><ion-icon name="logo-googleplus"></ion-icon></button>
          </ion-fab-list>
          <ion-fab-list side="right">
            <button ion-fab color="dark"><ion-icon name="logo-twitter"></ion-icon></button>
          </ion-fab-list>
        </ion-fab>
      `;
  }

}
