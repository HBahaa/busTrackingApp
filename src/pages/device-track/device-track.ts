import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';


@Component({
  selector: 'page-device-track',
  templateUrl: 'device-track.html',
})
export class DeviceTrackPage {
  map: GoogleMap;
  lat: any;
  lng: any;

  constructor(public navCtrl: NavController, public actionsheetCtrl: ActionSheetController) {
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
              alert("clicked")
            });
        });

      });

     
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Actions',
      buttons: [
        {
          text: 'Information',
          //role: 'destructive',
          icon: 'information',
          handler: () => {
            alert('information clicked');
          }
        },
        {
          text: 'Pause',
          icon: 'pause',
          handler: () => {
            alert('pause clicked');
          }
        },
        {
          text: 'Play',
          icon: 'play',
          handler: () => {
            alert('Play clicked');
          }
        },
        {
          text: 'Help',
          icon: 'help',
          handler: () => {
            alert('help clicked');
          }
        },
        {
          text: 'Cancel',
          //role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
