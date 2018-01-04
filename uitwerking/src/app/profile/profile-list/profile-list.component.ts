import { Component } from '@angular/core';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent {
    listFilter: string;
    
    profiles: any[] = [
        {
            id: 1,
            name: "Jeroen Verseput",
            dateOfBirth: new Date(1990, 7, 25),
            email: 'joen100@gmail.com',
            phoneNumber: "0612345678"
        },
        {
            id: 2,
            name: "Jan Jansen",
            dateOfBirth: new Date(1969, 10, 3),
            email: 'Bob@jansen.nl',
            phoneNumber: "0612345679"
        }
    ]
}