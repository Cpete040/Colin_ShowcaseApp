import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  @ViewChild('nav') slider!: NgImageSliderComponent;
  imageBoxHidden: boolean=true;
  images: Array<Object> =  [{image: "assets/images/data_binding_model.PNG"},
                            {image: "assets/images/property_binding.PNG"},
                            {image: "assets/images/event_binding.PNG"},
                            {image: "assets/images/two_way_binding.PNG"}]

  textColor: string="orange"
  resultText: string="Type Something"
  
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
  
  toggleTextColor(){
    if(this.textColor==="orange"){
      this.textColor="blue";
    } else {
      this.textColor="orange";
      console.log('test')
    }
  }

}
