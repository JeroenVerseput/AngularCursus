import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class ProfileDetailsGuardService implements CanActivate {
    canActivate(): boolean {
        return false;
    }
}