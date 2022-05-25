import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  //image slider info, ignore
  @ViewChild('nav') slider!: NgImageSliderComponent;
  imageBoxHidden: boolean=true;
  images: Array<Object> =  [{image: "assets/images/data.PNG"},
                            {image: "assets/images/service.PNG"},
                            {image: "assets/images/subscription.PNG"},
                            {image: "assets/images/result.PNG"}]
  
  //opens slider on correct image                          
  imageClick(index: number) {
    this.imageBoxHidden=false;
    this.slider.imageOnClick(index);
  }

  //hides slider bar when we close the overlay
  hideOnExit(){
    this.imageBoxHidden=true;
  }
  
  restaurants: Restaurant[] = [];
  errorMessage: String = '';

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: restaurants => {
        console.log(typeof this.restaurants);
        console.log(typeof restaurants);
        this.restaurants = restaurants;
        console.log(this.restaurants[0].name);
        
        //perform any modifications to the retrieved data here
      },
      error: err => this.errorMessage = err

    })
  }
}
