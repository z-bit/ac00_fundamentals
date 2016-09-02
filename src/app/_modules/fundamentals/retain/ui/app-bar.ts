import { Component } from '@angular/core';

@Component({
    selector: 'app-bar',
    template: `<div>
        <md-toolbar color="warn">
            <span>Retain</span>
            <span class="fill-space"></span>
            <a md-button > Settings </a>
            <a md-button > signout </a>
        </md-toolbar>
    </div>`
})export class AppBar {}
