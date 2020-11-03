import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private renderer: Renderer2) { }

  //Movement Animation to happen
  @ViewChild('card') card: ElementRef;
  // //Items
  @ViewChild('title') title: ElementRef;

  @ViewChild('sneaker') sneaker: ElementRef;

  @ViewChild('purchase') purchase: ElementRef;

  @ViewChild('info') description: ElementRef;

  @ViewChild('sizes') sizes: ElementRef;


  //Moving Animation Event

  onMouseMove(e) {
    console.log(e);

    console.log(this.card);
   
    let xAxis = (window.screen.width / 2 - e.screenX) / 25;
    let yAxis = (window.screen.height / 2 - e.screenY) / 25;
    console.log(yAxis, xAxis);
    this.renderer.setStyle(this.card.nativeElement, 'transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`)

  }

 
  mouseenter() {
   
    this.renderer.setStyle(this.card.nativeElement, 'transform', `none`)

    //Popout
    this.renderer.setStyle(this.title.nativeElement, 'transform', `translateZ(150px)`)
    this.renderer.setStyle(this.sneaker.nativeElement, 'transform', `translateZ(200px) rotateZ(-45deg)`)
    this.renderer.setStyle(this.description.nativeElement, 'transform', `translateZ(125px)`)
    this.renderer.setStyle(this.sizes.nativeElement, 'transform', `translateZ(100px)`)
    this.renderer.setStyle(this.purchase.nativeElement, 'transform', `translateZ(75px)`)
  }
    //Animate Out
    mouseleave(){
    this.renderer.setStyle(this.card.nativeElement, 'transform', `all 0.5s ease`)
    this.renderer.setStyle(this.card.nativeElement, 'transform', `rotateY(0deg) rotateX(0deg)`)

    //Popback
    this.renderer.setStyle(this.title.nativeElement, 'transform', `translateZ(0px)`)
    this.renderer.setStyle(this.sneaker.nativeElement, 'transform', `translateZ(0px) rotateZ(0deg)`)
    this.renderer.setStyle(this.description.nativeElement, 'transform', `translateZ(0px)`)
    this.renderer.setStyle(this.sizes.nativeElement, 'transform', `translateZ(0px)`)
    this.renderer.setStyle(this.purchase.nativeElement, 'transform', `translateZ(0px)`)
  }


  // container.addEventListener("mousemove", (e) => {
  //   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  //   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  //   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  // });
  // //Animate In
  // container.addEventListener("mouseenter", (e) => {
  //   card.style.transition = "none";
  //   //Popout
  //   title.style.transform = "translateZ(150px)";
  //   sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  //   description.style.transform = "translateZ(125px)";
  //   sizes.style.transform = "translateZ(100px)";
  //   purchase.style.transform = "translateZ(75px)";
  // });
  // //Animate Out
  // container.addEventListener("mouseleave", (e) => {
  //   card.style.transition = "all 0.5s ease";
  //   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //   //Popback
  //   title.style.transform = "translateZ(0px)";
  //   sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  //   description.style.transform = "translateZ(0px)";
  //   sizes.style.transform = "translateZ(0px)";
  //   purchase.style.transform = "translateZ(0px)";
  // });


}
