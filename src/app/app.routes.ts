import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

//own
import { DataResolver } from './app.resolver';
import { FundamentalsComponent} from "./_modules/fundamentals/fundamentals.component";
//import { YoComponent } from './_modules/fundamentals/yo';
//import { HomeComponent } from './_modules/fundamentals/home';

// AngularClass
// import { provideWebpack } from '@angularclass/webpack-toolkit';
// import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';

const routes: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },

  {
    path: 'fundamentals',
    component: FundamentalsComponent
  },

  //{
    //path: 'detail', loadChildren: () => require('es6-promise-loader!./+detail')('default')
  //},
  { path: '**',    component: NoContent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
