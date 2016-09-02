import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { YoComponent }   from './yo/yo.component';
import { FundamentalsComponent } from "./fundamentals.component";
import { Retain } from './retain/retain';

const routes: Routes = [
    {
        path: 'fundamentals',
        component: FundamentalsComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'yo', component: YoComponent },
            { path: 'retain', component: Retain }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);



