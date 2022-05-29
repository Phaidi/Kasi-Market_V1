import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vstats',
  templateUrl: './vstats.page.html',
  styleUrls: ['./vstats.page.scss'],
})
export class VstatsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  sold() {
    this.router.navigate([`/vttsold`]);
  }

}
