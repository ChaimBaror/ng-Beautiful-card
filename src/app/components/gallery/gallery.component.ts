import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() {
    this.itemsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
  }
  items = []
  itemsArray = []
  num = 0
  ngOnInit(): void {

  }
  indexItem() {
    console.log(this.num);
    this.items = []
    for (let i = this.num; i < this.itemsArray.length; i++) {
      if (i < 15 + this.num) {
        this.items.push(this.itemsArray[i])
        continue
      }
      this.num = i
      break
    }
  }


}
