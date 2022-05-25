import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  //image slider info, ignore
  @ViewChild('nav') slider!: NgImageSliderComponent;
  imageBoxHidden: boolean=true;
  images: Array<Object> =  [{image: "assets/images/appModule.PNG"}]
  
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
