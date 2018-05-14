import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { IProfile } from './profile.model';

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) { }

    getProfiles(): Observable<IProfile[]> {
        return this.http.get<IProfile[]>('/assets/mockservice/getprofiles.json').pipe(
            catchError(this.handleError),
            tap(data => console.log('data recieved: ' + JSON.stringify(data))));
    }

    getProfile(id: number): Observable<IProfile> {
        return this.getProfiles().pipe(map((profiles: IProfile[]) => profiles.find(p => p.id === id)));
    }

    private handleError( error: HttpErrorResponse) {
        return throwError('error getProfiles');
    }
}
