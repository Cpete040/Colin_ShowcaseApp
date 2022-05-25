import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  //image slider info, ignore
  @ViewChild('nav') slider!: NgImageSliderComponent;
  imageBoxHidden: boolean=true;
  images: Array<Object> =  [{image: "assets/images/Interpolation_model.PNG"},
                            {image: "assets/images/Interpolation_template.PNG"}]
                            
  //opens slider on correct image                          
  imageClick(index: number) {
    this.imageBoxHidden=false;
    this.slider.imageOnClick(index);
  }

  //hides slider bar when we close the overlay
  hideOnExit(){
    this.imageBoxHidden=true;
  }
         
                            
  str1: string = "banana"
  str2: string = "milkshake"

  constructor() { }

  ngOnInit(): void {
  }

  countFirstStringLength() {
    return this.str1.length;
  }
}
