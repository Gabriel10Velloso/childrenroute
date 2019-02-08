import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { VideosAllComponent } from './videos-all/videos-all.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosSearchComponent } from './videos-search/videos-search.component';
import { ROUTES } from './main.routing';

@NgModule({
    declarations: [  
        MainComponent,
        VideosAllComponent,
        VideosListComponent,
        VideosSearchComponent
    ],
    exports: [  
        MainComponent,
        VideosAllComponent,
        VideosListComponent,
        VideosSearchComponent
        
     ],
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
  
       ]
})
export class MainModule { }
