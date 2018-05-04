import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/ar';

@Pipe({
  name: 'customDate',
})
export class DatePipe implements PipeTransform {
  
	transform(value: string, ...args) {

		let newDate = new Date();
		let myDate =  new Date(value);
		
		if (args[0]) {
			moment.locale(args[0]);
		}

		if (myDate.getFullYear() === newDate.getFullYear() && newDate.getMonth() === newDate.getMonth()) {
			if (myDate.getDate() === newDate.getDate()) {
				return moment(value).fromNow();
			}
			else if(newDate.getDate() >= myDate.getDate() && myDate.getDate()>= newDate.getDate()-6)
			{
				return moment(value).fromNow();
			}
			else{
				// return value
				return moment(value).format('l, h:mm a');
			}
		}
		else{
			// return value
			return moment(value).format('l, h:mm a');
		}

	
	}
}
