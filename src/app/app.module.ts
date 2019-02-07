import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HmctsFormBuilderModule } from '../../projects/hmcts-form-builder/src/lib/hmcts-form-builder.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HmctsFormBuilderModule,
    RouterModule.forRoot([
      {
        path: 'example',
        component: AppComponent
      },
      {
        path: '',
        redirectTo: '/example',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
