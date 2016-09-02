import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // feature module
import { RouterModule } from '@angular/router';


import { MaterialModule } from '../material/material.module';
import { routing } from './fundamentals.routes';



import { FundamentalsComponent } from './fundamentals.component';
import { HomeComponent } from './home/home.component';
import { YoComponent } from './yo/yo.component';
import { Retain } from './retain/retain';
import { NoteCard } from './retain/ui/note-card';





@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        routing
    ],
    providers: [  ],
    declarations: [
        FundamentalsComponent,
        HomeComponent,
        YoComponent,
        Retain,
        NoteCard
    ],
    exports: [ FundamentalsComponent ],
    bootstrap: [ ]
})
export class FundamentalsModule { }