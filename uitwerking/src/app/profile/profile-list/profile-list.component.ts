import { Component, OnInit } from '@angular/core';
import { ProfileService, IProfile } from '../profile.service';

@Component({
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
    profiles: IProfile[];
    filteredProfiles: IProfile[];
    showPhoto: boolean = true;

    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProfiles = this.listFilter ? this.performFilter(this.listFilter) : this.profiles;
    }

    constructor(private profileService: ProfileService) { }

    ngOnInit() {
        this.profileService.getProfiles().subscribe( profiles => {
            this.profiles = profiles;
            this.filteredProfiles = this.profiles;
        });
    }

    performFilter(filterBy: string): IProfile[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.profiles.filter((profile: IProfile) =>
            profile.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    togglePhoto(): void {
        this.showPhoto = !this.showPhoto;
    }

    emailClicked(id: number, value: string): void {
        console.log(`${id} ${value}`);
    }

}
