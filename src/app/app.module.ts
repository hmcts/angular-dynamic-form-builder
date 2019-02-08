import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HmctsFormBuilderModule} from '../../projects/hmcts-form-builder/src/lib/hmcts-form-builder.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
      },
      {
        path: 'register', // TODO: find hardcoded path
        component: AppComponent
      },
      {
        path: 'register/:id', // TODO: find hardcoded path
        component: AppComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
