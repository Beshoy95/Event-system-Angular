import { Component, OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';
import { SpeakerService } from 'src/app/services/speaker.service';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit,OnChanges {
 // @Input() speaker:Speaker=  new Speaker(0,'','',new Date(),0,true,'',0,'')
 @Input() speakerId: number = 0
 speaker:Speaker|null=null

 ngOnChanges(changes: SimpleChanges): void {
  if(!changes['speakerId'].isFirstChange())
  this.speakerSer.getSpeakerById(this.speakerId).subscribe(
    a=>this.speaker=a
  )
 }

 constructor(public speakerSer:SpeakerService) { }

  ngOnInit(): void {
  }

}
