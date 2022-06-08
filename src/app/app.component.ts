import { Component } from '@angular/core';
import { TryobservableService } from './tryobservable.service';
import { SpeakerService } from './services/speaker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assigment';
  constructor(public o:TryobservableService,public speakerSer:SpeakerService){
  }

  show(){
    this.speakerSer.getAllSpeakers()
  }

}
