﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Configuration } from '../app.constants';

//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EquipmenttypeService {

    //BaseUrl: string = 'http://localhost:58333/api/equipmenttype';
    BaseUrl: string = this._conf.Server + 'api/equipmenttype';

    constructor(private _http: Http, private _conf: Configuration) {
    }

    public getAll = (): Observable<any[]> => {
        return this._http.get(this.BaseUrl).map(res => res.json()).catch(this.handleError);
    }

    update(current: any): Observable<any> {
        return this._http.put(this.BaseUrl + '/' + current.equipmenttypeId, current).map((res: Response) => res.json()).catch(this.handleError);
    }

    deactivate(current: any): Observable<any> {
        return this._http.put(this.BaseUrl + '/deactivate/' + current.equipmenttypeId, current).map((res: Response) => res.json()).catch(this.handleError);
    }

    activate(current: any): Observable<void> {
        return this._http.put(this.BaseUrl + '/activate/' + current.equipmenttypeId, current).map((res: Response) => res.json()).catch(this.handleError);
    }

    create(equipment: any): Observable<any> {
        return this._http.post(this.BaseUrl, equipment).map((res: Response) => res.json()).catch(this.handleError);
    }

    delete(current: any): Promise<void> {
        return this._http.delete(this.BaseUrl + '/' + current.equipmenttypeId).toPromise().then(() => null).catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('API Equipmenttype server error:', error);
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
