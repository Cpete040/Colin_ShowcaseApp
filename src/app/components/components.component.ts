import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  @ViewChild('nav') slider!: NgImageSliderComponent;
  
  topics: Details[] = [{title: "Templates", content: "The template is the html of your component. In addition to traditional tags, Angular provides several new tags that add logic to the web-page's layout and data.", url: "../../../assets/images/templates.PNG", errUrl: "./assets/images/templates.PNG"},
                      {title: "Styles", content: "Every component includes a css file. Styles applied here will apply to this component. Furthermore, the app.component.css file can be used for global stylings.", url: "../../../assets/images/styles.PNG", errUrl: "./assets/images/styles.PNG"},
                      {title: "Selector", content: "The selector is like the name of the component. You can include the name of the component in an HTML tag, to reuse it on any template.", url: "../../../assets/images/selector.PNG", errUrl: "./assets/images/selector.PNG"}];
  
  images: Array<Object> = [{image: "assets/images/templates.PNG"},
                          {image: "assets/images/styles.PNG"},
                          {image: "assets/images/selector.PNG"}]

  ishidden=true;

  constructor() { }
  ngOnInit(): void {

  }

  prevImageClick() {
    this.ishidden=false;
    this.slider.imageOnClick(1);
  }

  testMthd(){
    console.log("wowee")
    this.ishidden=true;
  }

}

//errUrl included so that the application works on github pages
class Details {
  title: string;
  content: string;
  url: string;
  errUrl: string;

  constructor(title: string, content: string, url: string, errUrl: string) { 
    this.title = title; 
    this.content = content;
    this.url = url;
    this.errUrl = errUrl;
  }  
}
