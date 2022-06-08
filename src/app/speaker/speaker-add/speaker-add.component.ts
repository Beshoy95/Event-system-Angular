import { Component, OnInit, Output } from '@angular/core';
import { SpeakerService } from 'src/app/services/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css']
})
export class SpeakerAddComponent implements OnInit {
  //1-declare event emitter datatype
  // @Output() speakerAdded: EventEmitter<Speaker> = new EventEmitter<Speaker>()
  newspeaker: Speaker = new Speaker(0,'', '','','','','');
  save(){
    this.speakerser.addSpeaker(this.newspeaker).subscribe(
      a=>console.log(a)
    )
  }

  constructor(public speakerser:SpeakerService) { 
    // this.speakerser;
  }

  ngOnInit(): void {
  }
  onClick() { 
  //  this.speakerser.addSpeaker(this.speaker);
  }
}
