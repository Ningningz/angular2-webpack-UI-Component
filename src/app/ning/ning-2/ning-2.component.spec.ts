import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Ning-2Component } from './ning-2.component';
import { Ning-2Service } from './shared/ning-2.service';
import { Ning-2 } from './shared/ning-2.model';

describe('a ning-2 component', () => {
	let component: Ning-2Component;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: Ning-2Service, useClass: MockNing-2Service },
				Ning-2Component
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([Ning-2Component], (Ning-2Component) => {
		component = Ning-2Component;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original ning-2 service
class MockNing-2Service extends Ning-2Service {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
