import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({
    name: 'dateFormatPipe',
})


export class dateFormatPipe implements PipeTransform {
    transform(value: string) {
       var datePipe = new DatePipe("en-US");
       let now = moment().format('LLLL');
        value = datePipe.transform(value, 'yyyy-MM-dd');
        return value;
    }
}