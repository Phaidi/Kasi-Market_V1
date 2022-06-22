import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ItermService } from 'src/app/services/iterm/iterm.service';
import { Geolocation } from '@capacitor/geolocation';
import * as geolib from 'geolib';


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
    private toast: LoadToastService,
    private authService: AuthService) {

  }

  async ngOnInit() {

    this.getAllItems();
    let {coords}: any = await Geolocation.getCurrentPosition()
    console.log(coords.latitude, coords.longitude)
    //-26.1325004,28.2430188
    //npm i geo-distance npm i geolib
    const lonHome = -25.5401753;
    const latHom = 28.0947051;
    let ddd = geolib.getDistance({ latitude: 28.09470513, longitude: -25.5401753 },
    { latitude: 25.5308223, longitude: -25.5308223 });

    console.log('Distance',this.calcCrow(28.09470513,-25.5401753,25.5308223,-25.5308223))
  // this.calcCrow(28.09470513,-25.5401753,25.5308223,-25.5308223)



  }

  calcCrow(lat1, lon1, lat2, lon2) 
  {
    var R = 6371; // km
    var dLat = this.toRad(lat2-lat1);
    var dLon = this.toRad(lon2-lon1);
    var lat1: any = this.toRad(lat1);
    var lat2: any = this.toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
   toRad(Value) 
  {
      return Value/ 1000  //* Math.PI / 180;
  }

  
 

  search(data){

    const value = data.target.value;

    this.foods = this.tempF;

    const filter = this.foods.filter(el => el.title.toLowerCase().includes(value.toLowerCase()));

    console.log("Hello filter:",filter.length)
    if(filter.length == 0){
      this.toast.logToast('Sorry no items found!!😥')
    }
    this.foods = filter;

  }

  getAllItems(){

    this.itermService.getAllItems().subscribe({
      next: (data: any) => {
        this.toast.presentLoading();
        console.log('Sign in data:',data);
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

  logout() {
    this.authService.logout();
    this.router.navigate(['/home/listing']);
    console.log("You out!!")
  }

}
