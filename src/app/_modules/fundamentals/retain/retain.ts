import { Component } from '@angular/core';
import { Main } from './containers/main';

@Component({
    selector: 'retain',
    directives: [
        Main
    ],
    template:`<div>
        <main-container></main-container>
    </div>`
})
export class Retain {}