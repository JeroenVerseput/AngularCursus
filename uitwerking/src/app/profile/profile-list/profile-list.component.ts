import { Component, OnInit } from '@angular/core';
import { ProfileService, IProfile } from '../profile.service';

@Component({
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {
    listFilter: string;
    profiles: IProfile[];

    constructor(private profileService: ProfileService) { }

    ngOnInit() {
        this.profileService.getProfiles().subscribe( profiles => {
            this.profiles = profiles;
        });
    }
}
