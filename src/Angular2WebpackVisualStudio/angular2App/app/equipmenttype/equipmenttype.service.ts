import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class EquipmenttypeService {

    equipmenttypeBaseUrl: string = 'http://localhost:58333/api/equipmenttype';

    constructor(private _http: Http) {
    }

    public getEquipmenttypes = (): Observable<any[]> => {
        return this._http.get(this.equipmenttypeBaseUrl).map(res => res.json()).catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('API Equipmenttype server error:', error);
        console.log('error');
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error');
    }

}