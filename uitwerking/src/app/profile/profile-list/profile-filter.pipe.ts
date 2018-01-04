import {  PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'profileFilter'
})
export class ProfileFilterPipe implements PipeTransform {

    transform(value: any[], filterBy: string): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((profile: any) =>
            profile.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
