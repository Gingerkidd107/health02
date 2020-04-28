import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page{
  public items: any = [];
  public gifs: any = [];

  constructor() {
      this.gifs[0] = "https://www.cdn.spotebi.com/wp-content/uploads/2016/04/up-down-plank-exercise-illustration-spotebi.gif";
      this.gifs[1] = "https://www.cdn.spotebi.com/wp-content/uploads/2015/04/hammer-curls-exercise-illustration.gif";
      this.gifs[2] = "https://www.cdn.spotebi.com/wp-content/uploads/2014/10/biceps-curl-exercise-illustration.gif";
      this.gifs[3] = "https://www.cdn.spotebi.com/wp-content/uploads/2015/04/lying-tricep-extension-exercise-illustration.gif";
      this.gifs[4] = "https://www.cdn.spotebi.com/wp-content/uploads/2016/09/squat-curl-exercise-illustration-spotebi.gif";
      this.items[0] = {expanded: false, name: "Up and Down Plank", sets:3, reps:15, number:1, rest:90, ani: this.gifs[0]};
      this.items[1] = {expanded: false, name: "Hammer Curls", sets:3, reps:20, number: 2, rest:45, ani: this.gifs[1]};
      this.items[2] = {expanded: false, name: "Bicep Curls", sets:3, reps:10, number: 3, rest: 30, ani: this.gifs[2]};
      this.items[3] = {expanded: false, name: "Lying Tricep Extension", sets:3, reps:10, number: 4, rest: 75, ani: this.gifs[3]};
      this.items[4] = {expanded: false, name: "Tricep Dips", sets:4, reps:10, number: 5, rest: 60, ani: this.gifs[4]};

  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}
