import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  categories: Category[] = [];
  foods: Food[] = [];
  tempF: Food[] = [];

  constructor(private foodService: FoodService, private router: Router) {
    this.getCategories();
    this.foods = this.foodService.getFoods();
    this.tempF = this.foods;
  }

  ngOnInit() {
  }

  search(data){

    const value = data.target.value;

    this.foods = this.tempF;

    const filter = this.foods.filter(el => el.title.toLowerCase().includes(value.toLowerCase()));

    this.foods = filter;

  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'All',
        image: 'assets/icon/1.png',
        active: true
      },
      {
        id: 2,
        label: 'Hardware',
        image: 'assets/icon/2.png',
        active: false
      },
      {
        id: 3,
        label: 'Appliances',
        image: 'assets/icon/3.png',
        active: false
      },
      {
        id: 4,
        label: 'Utilities',
        image: 'assets/icon/4.png',
        active: false
      },
    ];
  }

  goToDetailPage(id: number){
    this.router.navigate(['detail', id]);
  }

}
