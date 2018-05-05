import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserHomePage } from '../home/home';
import { DeviceDataPage } from '../device-data/device-data';
import { DataServiceProvider } from '../../../providers/data-service/data-service';

@Component({
  selector: 'page-item-data',
  templateUrl: 'item-data.html',
  providers: [DataServiceProvider]
})
export class ItemDataPage {
  type:any;
  id:any;
  itemName:string;
  token:any;
  tenant:string;
  loader:any;
  flag:any;

  constructor(
              public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage,public loadingCtrl: LoadingController,
              public alertCtrl: AlertController, public dataService: DataServiceProvider
            ) {
    this.id = this.navParams.get('param1');
    this.type = this.navParams.get('param2');
  }

  AddNewItem(){
    this.dataService.presentLoading();

    this.storage.get('userData').then((data)=>{
      this.token = data.token;
      this.tenant = data.tenant;

      console.log("this.token this.token= ", this.token )
      console.log("this.tenant this.tenant= ", this.tenant )
      this.dataService.getDataService(this.tenant, this.id, this.type, this.token, this.itemName).then((flag)=>{
        if(flag == true){
          this.navCtrl.push(UserHomePage)
        }else{
          this.navCtrl.push(DeviceDataPage)
        }
      });

    });

  }




}
