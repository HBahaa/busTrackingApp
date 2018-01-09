import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate',
})
export class DatePipe implements PipeTransform {
  
	transform(value: string, ...args) {

		let newDate = new Date();
		let myDate =  new Date(value);

		if (myDate.getFullYear() === newDate.getFullYear() && newDate.getMonth() === newDate.getMonth()) {
			if (myDate.getDate() === newDate.getDate()) {
				// return 'Today';
				return moment(value).fromNow();
			}
			else if(newDate.getDate() >= myDate.getDate() && myDate.getDate()>= newDate.getDate()-6)
			{
				return moment(value).fromNow();
			}
			else{
				return value;
			}
		}
		else{
			return value
		}

	
	}


}
