import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  @ViewChild('nav') slider!: NgImageSliderComponent;
  imageBoxHidden: boolean=true;
  images: Array<Object> =  [{image: "assets/images/directives_model.PNG"},
                            {image: "assets/images/ngFor.PNG"},
                            {image: "assets/images/ngIf.PNG"},
                            {image: "assets/images/ngSwitch.PNG"}]
                            
  items: number[] = [1,2];
  showTag: boolean = true;
  fruit: string = "";
  
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

  addItem(){
    this.items.push(this.items.length+1);
  }

  toggleShowTag(){
    if(this.showTag==true){
      this.showTag=false;
    } else {
      this.showTag=true;
    }
  }

}
