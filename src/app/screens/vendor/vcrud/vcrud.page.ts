import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../../models/vendor';

@Component({
  selector: 'app-vcrud',
  templateUrl: './vcrud.page.html',
  styleUrls: ['./vcrud.page.scss'],
})
export class VcrudPage implements OnInit {

  vForm: Vendor = new Vendor();
  constructor() { }

  ngOnInit() {
  }

}
