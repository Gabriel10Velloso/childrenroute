import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { VideosAllComponent } from './videos-all/videos-all.component';
import { VideosSearchComponent } from './videos-search/videos-search.component';
import { VideosListComponent } from './videos-list/videos-list.component';




export const ROUTES: Routes = [
    
    {path: '' , component: MainComponent,
    children: [
         {path: 'video', component: MainComponent},
        {path: 'videoall', component: VideosAllComponent},
        {path: 'videosearch', component: VideosSearchComponent},
        {path: 'videoslist', component: VideosListComponent},        
        {path: '**', redirectTo: 'videoslist'},
    ]},

];