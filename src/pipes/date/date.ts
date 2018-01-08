import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'customDate',
})
export class DatePipe implements PipeTransform {
  
	transform(value: string, ...args) {

		let newDate = new Date();
		let myDate =  new Date(value);

		if (myDate.getFullYear() === newDate.getFullYear() && newDate.getMonth() === newDate.getMonth()) {
			if (myDate.getDate() === newDate.getDate()) {
				return 'Today'
			}
			else if(myDate.getDate() === newDate.getDate()-1)
			{
				return 'Yesterday'
			}
			else{
				return value 
			}
		}
		else{
			return value
		}

	
	}


}
