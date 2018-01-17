import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProfile } from './profile.model';

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) { }

    getProfiles(): Observable<IProfile[]> {
        return this.http.get<IProfile[]>('/assets/mockservice/getprofiles.json')
            .do(data => console.log('data recieved: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProfile(id: number): Observable<IProfile> {
        return this.getProfiles().map((profiles: IProfile[]) => profiles.find(p => p.id === id));
    }

    private handleError( error: HttpErrorResponse) {
        return Observable.throw('error getProfiles');
    }
}
