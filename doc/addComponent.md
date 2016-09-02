# Add MyComponent

*  **1.** create folder ***my***


*  **2.** add file ***my/my.component.ts***

<pre><code>
    import { Component } from '@angular/core';
    
    @Component({
        selector: 'my',
        templateUrl: 'my.template.html
    })
    export class MyComponent {}
</code></pre>

* **3.** add file ***my/index.ts***

<pre><code>
    export * from './my.component';
</code></pre>

* **4.** add route to ***app.routes.ts***

<pre><code>
    <b>import { MyComponent } from "./my";</b>
    ...
    export const ROUTES: Routes = [
      { path: '',      component: Home },
      { path: 'home',  component: Home },
      <b>{ path: 'my',    component: MyComponent }</b>
    ];  
</code></pre>

* **5.** add routerLink in ***app.template.html*** or template metadata in ***app.component.ts***

```
        <a md-button [routerLink]=" ['./my'] "> My </a>
```

* **6.** import MyComponent into ***app.module.ts***

<pre><code>
    import { MyComponent } from './my';   
    @NgModule({
        imports: [],
        providers: [],
        declarations: [ 
            AppComponent,
            <b>MyComponent</b>
        ],
        exports: [ AppComponent ],
        bootstrap: [ AppComponent ],
        
    })
</code></pre>