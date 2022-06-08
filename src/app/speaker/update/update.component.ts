import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SpeakerService } from 'src/app/services/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() speakerId: number = 0
  speaker: Speaker = new Speaker(0, '', '', '', '', '', '');

  constructor(public speakerser: SpeakerService) { }
/*
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['speakId'].isFirstChange())
      this.speakerser.getSpeakerById(this.speakerId).subscribe(
        a => this.speaker = a
      )
  }*/
  ngOnInit(): void {
  }

  save() {
    this.speakerser.updateSpeaker(this.speaker).subscribe(
      a => console.log(a)
    )
  }

}
