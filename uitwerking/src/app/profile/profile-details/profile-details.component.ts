import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService, IProfile } from '../profile.service';


@Component({
    templateUrl: './profile-details.component.html'
})
export class ProfileDetailsComponent implements OnInit {

    profile: IProfile;

    constructor(private route: ActivatedRoute, private router: Router, private profileService: ProfileService) { }

    ngOnInit() {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.profileService.getProfile(id).subscribe(profile => {
                console.log(profile);
                this.profile = profile;
            });
        }
    }
}
