import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { NingComponent } from './ning.component';
import { NingService } from './shared/ning.service';
import { Ning } from './shared/ning.model';

describe('a ning component', () => {
	let component: NingComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: NingService, useClass: MockNingService },
				NingComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NingComponent], (NingComponent) => {
		component = NingComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original ning service
class MockNingService extends NingService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
