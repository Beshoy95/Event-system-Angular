import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';
import { SpeakerService } from 'src/app/services/speaker.service';

@Component({
  selector: 'app-speaker-delete',
  templateUrl: './speaker-delete.component.html',
  styleUrls: ['./speaker-delete.component.css']
})
export class SpeakerDeleteComponent implements OnInit {
 //1-declare event emitter datatype
 
 @Input() speakerEmail='';

 newspeaker: Speaker[]=[] 
/*
 delete(){
   this.speakerser.deleteSpeaker(this.speakerEmail).subscribe(
     a=>console.log('deleted')
   )
 }*/
  constructor(public speakerser:SpeakerService) { }
  
  ngOnInit(): void {
    
  }

}
