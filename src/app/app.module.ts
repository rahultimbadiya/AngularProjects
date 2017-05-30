import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import {headerComponent} from './header/app.headerComponent';
import {navComponent} from './nav/app.navComponent';
import {contentAreaComponent} from './contentArea/app.contentAreaComponent';
import {footerComponent} from './footer/app.footerComponent';
import {aboutComponent} from './about/app.aboutComponent';


@NgModule({
  imports:      [ BrowserModule,
              RouterModule.forRoot([
                    {
                    path: 'about',
                    component: aboutComponent
                    },
                    {
                    path: '',
                    component: contentAreaComponent
                    },

                  ])],
  declarations: [ AppComponent,
                  headerComponent,
                  navComponent,
                  contentAreaComponent,
                  footerComponent,
                  aboutComponent
                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
