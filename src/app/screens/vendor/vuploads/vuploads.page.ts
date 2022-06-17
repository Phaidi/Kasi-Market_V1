import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-vuploads',
  templateUrl: './vuploads.page.html',
  styleUrls: ['./vuploads.page.scss'],
})
export class VuploadsPage implements OnInit {

  upForm: Food;

  constructor() { }

  ngOnInit() {
  }

}
