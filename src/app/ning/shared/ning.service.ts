import 'rxjs/add/operator/map';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Ning } from './ning.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NingService {

	constructor(private http: Http) { }

}
