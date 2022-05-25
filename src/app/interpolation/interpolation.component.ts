import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  @ViewChild('nav') slider!: NgImageSliderComponent;
  imageBoxHidden: boolean=true;
  images: Array<Object> =  [{image: "assets/images/Interpolation_model.PNG"},
                            {image: "assets/images/Interpolation_template.PNG"}]
                            
  str1: string = "banana"
  str2: string = "milkshake"

  constructor() { }

  ngOnInit(): void {
  }

  imageClick(index: number) {
    this.imageBoxHidden=false;
    this.slider.imageOnClick(index);
  }

  hideOnExit(){
    this.imageBoxHidden=true;
  }

  countFirstStringLength() {
    return this.str1.length;
  }
}
