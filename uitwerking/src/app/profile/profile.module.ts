import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

import { ProfileFilterPipe } from './profile-list/profile-filter.pipe';

import { ProfileService } from './profile.service';
import { ProfileDetailsGuardService } from './profile-details/profile-details-guard.service';

@NgModule({
    declarations:
    [
        ProfileListComponent,
        ProfileDetailsComponent,
        ProfileFilterPipe
    ],
    imports:
    [
        SharedModule,
        RouterModule.forChild([
            { path: 'profiles', component: ProfileListComponent },
            { path: 'profile/:id', canActivate: [ProfileDetailsGuardService], component: ProfileDetailsComponent }
          ])
    ],
    exports: [],
    providers: [ProfileService, ProfileDetailsGuardService]
})
export class ProfileModule { }