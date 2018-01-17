import {  PipeTransform, Pipe } from '@angular/core';
import { IProfile } from '../profile.model';

@Pipe({
    name: 'profileFilter'
})
export class ProfileFilterPipe implements PipeTransform {

    transform(value: IProfile[], filterBy: string): IProfile[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((profile: IProfile) =>
            profile.firstname.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
