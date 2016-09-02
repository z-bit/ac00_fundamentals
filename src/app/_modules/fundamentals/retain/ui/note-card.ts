import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'note-card',

    styles: [`
        .note-card {
          margin: 20px;
          padding: 20px;
          border-radius: 5px;
          width: 10%;
          position: relative;
        }
        .title {
          font-size: 1.2rem;
          font-weight: bold;
          text-align: left;
          color: rgba(0,0,0,0.8);
        }
        .value {
          text-align: left;
          font-size: 1.4rem;
          font-weight: 200;
        }
        .icon {
          position: absolute;
          padding: 5px;
          color: black;
          border: 1px solid lightgrey;
          background-color: white;
          font-size: 30px;
          top: -15px;
          left: -15px;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          cursor: pointer;
        }
    `],
    template: `
        <md-card
            class="note-card row shadow-1"
            [ngStyle]="{'background-color': note.color}"
            (mouseenter)="toggle()"
            (mouseleave)="toggle()"
        >
            <div class="icon" *ngIf="showCheck" (click)="onChecked()" >
                <md-icon>check</md-icon>
            </div>
            <div class="col-xs-12 title">
                {{ note.title }}
            </div>
            <div class="col-xs-12 value">
                {{ note.value }}
            </div>
        </md-card>
    `
})
export class NoteCard {

    @Input() note = {};

    @Output() checked = new EventEmitter();

    showCheck: boolean = false;

    toggle() {
        this.showCheck = !this.showCheck;
    }

    onChecked(){
        this.checked.next(this.note);
    }


}
