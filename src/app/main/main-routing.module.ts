import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
        {
            path: 'home',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
        },
        {
            path: 'news',
            loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
        },
        {
            path: 'contact',
            loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
        },
        {
            path: 'downloads',
            loadChildren: () => import('../downloads/downloads.module').then( m => m.DownloadsPageModule)
        },
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}