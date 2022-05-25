import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  //image slider info, ignore
  @ViewChild('nav') slider!: NgImageSliderComponent;
  imageBoxHidden: boolean=true;
  images: Array<Object> =  [{image: "assets/images/app-routing.PNG"},
                            {image: "assets/images/router_outlet.PNG"},
                            {image: "assets/images/router_link.PNG"}]

  //opens slider on correct image                          
  imageClick(index: number) {
    this.imageBoxHidden=false;
    this.slider.imageOnClick(index);
  }

  //hides slider bar when we close the overlay
  hideOnExit(){
    this.imageBoxHidden=true;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
