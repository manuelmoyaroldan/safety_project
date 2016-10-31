import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

//import 'rxjs/add/observable/throw';
//import { Observer } from 'rxjs/Observer';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

    //customersBaseUrl: string = '/api/customers'; 
    //ordersBaseUrl: string = '/api/orders';
    user: any;
    userBaseUrl: string = 'http://localhost:58333/api/user'; 
    //userBaseUrl: string = 'api/user';
    //customers: ICustomer[];
    //orders: IOrder[];
    //states: IState[];
     
    constructor(private http: Http) {
        //this.user = this.http.get(this.userBaseUrl).map(res => res.json()).subscribe(res => this.user = res);
        this.getUser().subscribe(data => this.user = data,error => console.log('Error' + error),() => console.log(this.user));
    }

    public getUser=(): Observable<any>=>{
        if (this.user == null || this.user == undefined) {
            console.log("API User");
            //console.log(this.userBaseUrl);
            //this.user = this.http.get(this.userBaseUrl);
            //this.user = this.http.get(this.userBaseUrl).map((response: Response) => <any>response.json());
            //this.http.get(this.userBaseUrl).
            //this.http.get(this.userBaseUrl).toPromise().then(response => response.json().data as any).catch(this.handleError);
            //return this.http.get(this.userBaseUrl).map((response: Response) => <any>response.json().data);
            //return this.http.get(this.userBaseUrl).map(this.extractData).catch(this.handleError);
            //return this.http.get(this.userBaseUrl).map((response: Response) => <any>response.json()).catch(this.handleError);
            //this.user = this.http.get(this.userBaseUrl).map(res => res.json()).subscribe(res => this.user = res);
            return this.http.get(this.userBaseUrl).map(res => res.json()).catch(this.handleError);

        } else {
            return this.user; 
        }
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    //getCustomers(): Observable<ICustomer[]> {
    //    return this.http.get(this.customersBaseUrl)
    //        .map((res: Response) => {
    //            this.customers = res.json();
    //            return this.customers;
    //        })
    //        .catch(this.handleError);
    //}

    //getCustomer(id: number): Observable<ICustomer> {
    //    return this.http.get(this.customersBaseUrl + '/' + id)
    //        .map((res: Response) => res.json())
    //        .catch(this.handleError);
    //}

    //getOrders(id: number): Observable<IOrder[]> {
    //    return this.http.get(this.ordersBaseUrl + '/' + id)
    //        .map((res: Response) => res.json())
    //        .catch(this.handleError);
    //}

    //updateCustomer(customer: ICustomer): Observable<boolean> {
    //    return this.http.put(this.customersBaseUrl + '/' + customer.id, customer)
    //        .map((res: Response) => res.json())
    //        .catch(this.handleError);
    //}

    //getStates(): Observable<IState[]> {
    //    return this.http.get('/api/states')
    //        .map((res: Response) => res.json())
    //        .catch(this.handleError);
    //}

    private handleError(error: any) {
        console.error('server error:', error);
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

    //Not using now but leaving since they show how to create
    //and work with custom observables

    //private findCustomerObservable(id: number): Observable<ICustomer> {
    //    return this.createObservable(this.filterCustomers(id));
    //}

    //private filterCustomers(id: number): ICustomer {
    //    const custs = this.customers.filter((cust) => cust.id === id);
    //    return (custs.length) ? custs[0] : null;
    //}

    //private createObservable(data: any): Observable<any> {
    //    return Observable.create((observer: Observer<any>) => {
    //        observer.next(data);
    //        observer.complete();
    //    });
    //}

    //private filterStates(stateAbbreviation: string) {
    //    const filteredStates = this.states.filter((state) => state.abbreviation === stateAbbreviation);
    //    return (filteredStates.length) ? filteredStates[0] : null;
    //}

}