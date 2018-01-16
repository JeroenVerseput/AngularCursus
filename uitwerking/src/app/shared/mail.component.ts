import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-mail-component',
    templateUrl: './mail.component.html'
})
export class MailComponent {

    @Input() email: string;
    @Output() output: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.output.emit(this.email);
    }

}
