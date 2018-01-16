import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MailComponent } from './mail.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';


@NgModule({
    imports: [],
    exports : [
      CommonModule,
      FormsModule,
      NgbModule,
      MailComponent,
      ConvertToSpacesPipe
    ],
    declarations: [
      MailComponent,
      ConvertToSpacesPipe ],
})
export class SharedModule {

}
