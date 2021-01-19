import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';
@Pipe({
    name: 'diffDates',
})
export class DiffDatesPipe implements PipeTransform {
    transform(date: Date): string {
        const dateLuxon = DateTime.fromJSDate(date);
        const today = DateTime.fromJSDate(new Date());
        const diffDuration = today.diff(dateLuxon, ['years', 'months']);

        const years = diffDuration.years;
        const months = Math.ceil(diffDuration.months);

        const yearSubstring = `${years} years`;
        let monthSubstring = '';
        if (months > 0) {
            monthSubstring = `and ${months}` + (months > 1 ? ` months` : ` month`);
        }
        return `${yearSubstring} ${monthSubstring}`;
    }
}
