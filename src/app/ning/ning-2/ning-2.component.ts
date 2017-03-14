import { Component, OnInit } from '@angular/core';

import { Ning } from '../shared/ning.model';
import { NingService } from '../shared/ning.service';

@Component({
	selector: 'ning-2',
	templateUrl: 'ning-2.component.html',
	providers: [NingService]
})

export class Ning2Component implements OnInit {
	public ning: Ning[] = [];

	constructor(private ningService: NingService) { }

	public ngOnInit() {
		console.log('ning-2');
	}

}
