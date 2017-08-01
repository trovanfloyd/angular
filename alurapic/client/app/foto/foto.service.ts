import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {

    http: Http;
    hearders: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) {
        this.http = http;

        this.hearders = new Headers();
        this.hearders.append('Content-type', 'application/json');
    }

    cadastra(foto: FotoComponent): Observable<Response> {
         return this.http
            .post(this.url, JSON.stringify(foto), {headers: this.hearders});
    }

    lista(): Observable<FotoComponent[]> {
        return this.http.get(this.url).map(res => res.json());
    }

    remove(foto: FotoComponent) {
        return this.http.delete(this.url + '/' + foto._id);
    }

}