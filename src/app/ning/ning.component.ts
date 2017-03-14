import { Component, OnInit } from '@angular/core';

import { Ning } from './shared/ning.model';
import { NingService } from './shared/ning.service';

@Component({
	selector: 'ning',
	templateUrl: 'ning.component.html',
	providers: [NingService]
})

export class NingComponent implements OnInit {
	public ning: Ning[] = [];

	constructor(private ningService: NingService) { }

	public ngOnInit() {
		console.log('ning');
	}
}
