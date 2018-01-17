import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) { }

    getProfiles(): Observable<IProfile[]> {
        return this.http.get<IProfile[]>('/assets/mockservice/getprofiles.json')
            .do(data => {
                console.log('data recieved: ' + JSON.stringify(data));
            })
            .catch(error => {
                return Observable.throw('error getprofiles');
            });
    }

    getProfile(id: number): Observable<IProfile> {
        return this.getProfiles().map((profiles: IProfile[]) => profiles.find(p => p.id === id));
    }
}

export interface IProfile {
    id: number;
    photourl: string;
    firstname: string;
    surname: string;
    jobTitle: string;
    dateOfBirth: Date;
    email: string;
    phoneNumber: string;
}
