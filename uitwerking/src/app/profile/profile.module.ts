import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProfileListComponent } from './profile-list/profile-list.component';

import { ProfileFilterPipe } from './profile-list/profile-filter.pipe'

@NgModule({
    declarations:[
        ProfileListComponent,
        ProfileFilterPipe
    ],
    imports:[
        SharedModule,
        RouterModule.forChild([
            { path: 'profiles', component: ProfileListComponent },
          ])
    ],
    exports:[],
    providers:[]
})
export class ProfileModule {

}