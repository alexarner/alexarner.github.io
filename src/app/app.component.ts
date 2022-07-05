import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	title = 'alexarner';

	constructor(
	) {}

	interval: any;

	ngOnInit(): void {

		var x = localStorage.getItem('timeElapsed')

		if (x == null) 
			localStorage.setItem('timeElapsed', '0')

		this.interval = setInterval(() => {
			var x = localStorage.getItem('timeElapsed')
			if (x != null) 
				localStorage.setItem('timeElapsed', (Number.parseInt(x) + 1).toString());
		},1000)
		
	}


	getTime() {
		return localStorage.getItem('timeElapsed')
	}
	
}
