import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Settings } from './settings.model';

@Injectable()
export class SettingsService {

	constructor(private http: Http) { }

	getList(): Observable<Settings[]> {
		return this.http.get('/api/list').map(res => res.json() as Settings[]);
	}
}