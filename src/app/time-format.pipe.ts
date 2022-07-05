import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

	// if 69 seconds -> 1m 9s
	// if 23 seconds -> 23s
	transform(value: string | null): string {
		if (value == null)
			return ''
		let seconds = Number.parseInt(value)

		let minutes = Math.floor(seconds / 60)
		
		if (minutes == 0) 
			return `${seconds}s`

		let spareSeconds = seconds - (minutes * 60)

		let hours = Math.floor(minutes / 60)
		
		if (hours == 0) 
			return `${minutes}m ${spareSeconds}s`

		let spareMinutes = minutes - (hours * 60)

		let days = Math.floor(hours / 24)

		if (days == 0) 
			return `${hours}h ${spareMinutes}m ${spareSeconds}s`

		let spareHours = hours - (days * 24)

		return `${days}d ${spareHours}h ${spareMinutes}m ${spareSeconds}s`
	}

}
