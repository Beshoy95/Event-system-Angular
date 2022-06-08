import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from '../_models/speaker';

@Injectable({
  providedIn: 'root',
})
export class SpeakerService {
  public isEditable: boolean = false;

  baseUrl: string = "http://localhost:8080/speakers/"
  getAllSpeakers() {
    return this.http.get<Speaker[]>(this.baseUrl)
  }

  getSpeakerById(id: number) {
    return this.http.get<Speaker>(this.baseUrl + id)
  }


  addSpeaker(speak: Speaker) {
    return this.http.post<Speaker>(this.baseUrl, speak)
  }

  updateSpeaker(speak: Speaker) {
    return this.http.put<Speaker>(this.baseUrl + speak._id, speak)
  }

  deleteSpeaker(speak: Speaker) {
    return this.http.delete<Speaker>(this.baseUrl + speak._id)
  }
  constructor(public http: HttpClient) {
  }
}
