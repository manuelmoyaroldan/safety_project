import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Equipment, EquipmentType } from '../shared/interfaces';


@Injectable()
export class EquipmentService {

    //equipment: any;
    equipmentBaseUrl: string = 'http://localhost:58333/api/equipment';
    equipments: Observable<Equipment[]>;

    constructor(private http: Http) {
    }

    public getEquipments = (): Observable<any[]> => {

            console.log("API Equipments");
            console.log(this.equipmentBaseUrl);
            return this.http.get(this.equipmentBaseUrl).map(res => res.json()).catch(this.handleError);
    }

    updateEquipment(equipment: any): Observable<any> {
        return this.http.put(this.equipmentBaseUrl + '/' + equipment.equipmentId, equipment).map((res: Response) => res.json()).catch(this.handleError);
    }

    createEquipment(equipment: any): Observable<any> {
        return this.http.post(this.equipmentBaseUrl, equipment).map((res: Response) => res.json()).catch(this.handleError);
    }
    deleteEquipment(equipment: any): Promise<void> {
        return this.http.delete(this.equipmentBaseUrl + '/' + equipment.equipmentId)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
        //return this.http.delete(this.equipmentBaseUrl+'/'+equipment.equipmentId).map((res: Response)=> res.json()).catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        console.error('API Equipment server error:', error);
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