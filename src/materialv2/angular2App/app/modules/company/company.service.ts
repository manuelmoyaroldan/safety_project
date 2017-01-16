﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../app.constants';

//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompanyService {

    //BaseUrl: string = 'http://localhost:58333/api/company';
    BaseUrl: string = this._conf.Server+'api/company';

    constructor(private _http: Http, private _conf: Configuration) {
    }

    public getAll = (): Observable<any[]> => {
        return this._http.get(this.BaseUrl).map(res => res.json()).catch(this.handleError);
    }

    update(current: any): Observable<any> {
        return this._http.put(this.BaseUrl + '/' + current.companyId, current).map((res: Response) => res.json()).catch(this.handleError);
    }

    deactivate(current: any): Observable<any> {
        return this._http.put(this.BaseUrl + '/deactivate/' + current.companyId, current).map((res: Response) => res.json()).catch(this.handleError);
    }

    activate(current: any): Observable<void> {
        return this._http.put(this.BaseUrl + '/activate/' + current.companyId, current).map((res: Response) => res.json()).catch(this.handleError);
    }

    create(company: any): Observable<any> {
        return this._http.post(this.BaseUrl, company).map((res: Response) => res.json()).catch(this.handleError);
    }

    delete(current: any): Promise<void> {
        return this._http.delete(this.BaseUrl + '/' + current.companyId).toPromise().then(() => null).catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('API Company server error:', error);
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