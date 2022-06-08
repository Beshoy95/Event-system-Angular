import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {
  @Input() rating = 2
  //1-declare event
 // @Output() ratingClicked: EventEmitter<Speaker> = new EventEmitter<Speaker>();
  
  cropWidth = 75
  constructor() { }
  
  ngOnChanges() {
   // console.log("ng on change");
   // this.cropWidth = this.rating * 75 / 5
  }
  
 // std: Speaker = new Speaker(1,'bisho','ramsis',new Date(),3,true,'cairo',3,'image')
 /*
  onClick() {
    //fire event
    this.ratingClicked.emit(this.std)
    console.log("clicked");
  }
  */
  ngOnInit(): void {
  }

}
