import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Cordless Driller',
        price: 1200,
        image: 'assets/images/i1.png',
        description:
          'Rechargable driller with 18v ksjkhsjs ddg dgfggf isjdjkjsk skjdsdjj sk ksjdjskdksj ksjdkdkjskj',
      },
      {
        id: 2,
        title: 'whisteling Kettle',
        price: 550,
        image: 'assets/images/i2.png',
        description:
          'Rechargable driller with 18v ksjkhsjs  dfd dffddv  ddfd dfdfdf isjdjkjsk skjdsdjj sk ksjdjskdksj ksjdkdkjskj',
      },
      {
        id: 3,
        title: 'Yeezy',
        price: 1500,
        image: 'assets/images/i3.png',
        description:
          'Rechargable driller with 18v ksjkhsjs isjdjkjsk skjdsdjj sk ksjdjskdksj ksjdkdkjskj',
      },
      {
        id: 4,
        title: 'Black Pearl',
        price: 1200,
        image: 'assets/images/i4.jpg',
        description:
          'Rechargable driller with 18v ksjkhsjs isjdjkjsk skjdsdjj sk ksjdjskdksj ksjdkdkjskj',
      },
      {
        id: 5,
        title: 'Nike',
        price: 1100,
        image: 'assets/images/i5.jpg',
        description:
          'Rechargable driller with 18v ksjkhsjs isjdjkjsk skjdsdjj sk ksjdjskdksj ksjdkdkjskj',
      },
      {
        id: 6,
        title: 'Vase',
        price: 320,
        image: 'assets/images/i6.jpg',
        description:
          'Rechargable driller with 18v ksjkhsjs isjdjkjsk skjdsdjj sk ksjdjskdksj ksjdkdkjskj',
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
