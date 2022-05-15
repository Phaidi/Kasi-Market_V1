import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { ItermService } from 'src/app/services/iterm/iterm.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  categories: Category[] = [];
  foods: Food[] = [];
  tempF: Food[] = [];

  data: any;

  constructor(
    private itermService: ItermService,
    private router: Router,
    private toast: LoadToastService) {

  }

  ngOnInit() {

    this.getAllItems()
  }

  search(data){

    const value = data.target.value;

    this.foods = this.tempF;

    const filter = this.foods.filter(el => el.title.toLowerCase().includes(value.toLowerCase()));

    this.foods = filter;

  }

  getAllItems(){

    this.itermService.getAllItems().subscribe({
      next: (data: any) => {
        this.toast.presentLoading()
        console.log('Sign in data:',data.items);
        this.foods= data.items;
        this.tempF = this.foods;

      },
      error: err => {
        // this.errors[0] = err.message;
      }
    });
  }



  goToDetailPage(id){
    //console.log(' data:',id);
     this.router.navigate(['/detail/'+id]);
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        heading: 'Normal text',
        para1: 'Lorem ipsum dolor sit amet, consectetur',
        para2: 'adipiscing elit.'
      };
    }, 5000);
  }

}
