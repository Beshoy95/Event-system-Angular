import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { SpeakerAddComponent } from './speaker/speaker-add/speaker-add.component';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import { SpeakerDeleteComponent } from './speaker/speaker-delete/speaker-delete.component';
import { CustomDirective } from './Directives/custom.directive';
import { SearchFilterPipe} from './search-filter.pipe';
import { UpdateComponent } from './speaker/update/update.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerDetailsComponent,
    SpeakerDeleteComponent,
    CustomDirective,
    SearchFilterPipe,
    UpdateComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
