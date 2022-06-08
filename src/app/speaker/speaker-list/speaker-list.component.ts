import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/services/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit {

  speakers:Speaker[]=[];
  speakersDetailsId=0
  speakersEditId=0

  public searchFilter: any = '';
  public query:string='';

  constructor(public speakerser:SpeakerService) { }
  
  load(){
   this.speakerser.getAllSpeakers().subscribe(a=>this.speakers=a)
  }

  saveSpeaker(s:Speaker){
//    this.speakers.push(s)
  }

  saveSpeakerAfterDelete(s:any){
 //   this.speakers=s;
  }

  showDetails(s:Speaker){
   // this.speakerDetails=s
  }

  hidden = false;
  viewImage() {
 //   this.hidden = !this.hidden;
  }

  // isEditable = false;

  ngOnInit(): void {
  //  this.speakers=this.speakerser.getAllSpeakers();
  }


}


