import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { isNumber } from 'util';

@Injectable()
export class ProfileDetailsGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id = Number(route.url[1].path);

        if (!isNaN(id) && Number(id) > 0) {
            return true;
        }

        this.router.navigate(['/profiles']);
        return false;
    }
}
