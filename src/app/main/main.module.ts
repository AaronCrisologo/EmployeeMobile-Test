import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { HomePageModule } from '../home/home.module';
import { NewsPageModule } from '../news/news.module';
import { ContactPageModule } from '../contact/contact.module';
import { DownloadsPageModule } from '../downloads/downloads.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    HomePageModule,
    NewsPageModule,
    ContactPageModule,
    DownloadsPageModule
  ],
  declarations: [MainPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainPageModule {}
