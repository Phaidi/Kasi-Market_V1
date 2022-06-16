/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  date = new Date();

  countDownDate = new Date("June 23, 2022 15:37:25").getTime();
  demo: any;

  x = setInterval(() => {
    var now = new Date().getTime();
    var distance = this.countDownDate - now;
    var days = Math.floor(distance /(1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);
    this.demo = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  });

  constructor() { }

  ngOnInit() {
  }

}
