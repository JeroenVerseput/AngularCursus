import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { IProfile } from '../profile.model';

@Component({
    templateUrl: './profile-details.component.html'
})
export class ProfileDetailsComponent implements OnInit {

    profile: IProfile;

    constructor(private route: ActivatedRoute, private router: Router, private profileService: ProfileService) { }

    ngOnInit() {
        const paramid = this.route.snapshot.paramMap.get('id');
        if (paramid) {
            const id = +paramid;
            this.profileService.getProfile(id).subscribe(profile => {
                console.log(profile);
                this.profile = profile;
            });
        }
    }

    onBack(): void {
        this.router.navigate(['/profiles']);
    }
}
