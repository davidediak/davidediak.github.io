import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
@Pipe({
    name: 'diffDates',
})
export class DiffDatesPipe implements PipeTransform {
    transform(date: Date): string {
        const today = new Date();
        const diffDuration = moment.duration(moment(today).diff(date));
        const months = diffDuration.months();

        const yearSubstring = `${diffDuration.years()} years`;
        let monthSubstring = '';
        if (months > 0)
            monthSubstring = `and ${diffDuration.months()}` + (months > 1 ? ` months` : ` month`);
        return `${yearSubstring} ${monthSubstring}`;
    }
}
