import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-vlist',
  templateUrl: './vlist.page.html',
  styleUrls: ['./vlist.page.scss'],
})
export class VlistPage implements OnInit {

  foods: Food[] = [];
  tempF: Food[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(data){

    const value = data.target.value;

    this.foods = this.tempF;

    const filter = this.foods.filter(el => el.title.toLowerCase().includes(value.toLowerCase()));

    this.foods = filter;

  }

  goToDetailPage(id: number){
    this.router.navigate(['detail', id]);
  }

}
