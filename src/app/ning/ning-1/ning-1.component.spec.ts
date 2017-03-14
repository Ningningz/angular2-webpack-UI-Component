import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Ning-1Component } from './ning-1.component';
import { Ning-1Service } from './shared/ning-1.service';
import { Ning-1 } from './shared/ning-1.model';

describe('a ning-1 component', () => {
	let component: Ning-1Component;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: Ning-1Service, useClass: MockNing-1Service },
				Ning-1Component
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([Ning-1Component], (Ning-1Component) => {
		component = Ning-1Component;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original ning-1 service
class MockNing-1Service extends Ning-1Service {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
