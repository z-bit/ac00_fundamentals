import { Component } from '@angular/core';
import { NoteCard } from '../ui/note-card';

@Component({
    selector: 'notes-container',
    directives: [
        NoteCard
    ],
    styles: [`
        .notes {
            padding-top: 50px;
            ;
        }
        .creator {
            margin-bottom: 40px;
        }
    `],
    template: `
        <div class="row center-xs notes">
            <div class="col-xs-6 creator">
                note creator here
            </div>
            <div class="notes col-xs-8">
                <div class="row between-xs">
                    <note-card
                        [note]="note"
                        class="col-xs-4"
                        *ngFor="let note of notes; let i = index"
                        (checked)="onNoteChecked($event, i)"
                    >
                    </note-card>
                </div>
            </div>
        </div>
    `
})
export class Notes {
    notes = [
        { title: 'new note', value: 'note here', color: 'lightblue'},
        { title: 'new note', value: 'note here', color: 'lightblue'},
        { title: 'new note', value: 'note here', color: 'lightblue'}
    ];

    onNoteChecked(note, i) {
        this.notes.splice(i, 1);
    }
}