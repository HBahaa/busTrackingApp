import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChildGradesPage } from '../child-grades/child-grades';

@Component({
  selector: 'page-semesters',
  templateUrl: 'semesters.html',
})
export class SemestersPage {

  constructor(public navCtrl: NavController) {
  }

  showGrades() {
    this.navCtrl.push(ChildGradesPage);
  }


}
