import { Http, Headers } from '@angular/http';
import { FotoComponent } from './foto.component';

class FotoService {

    http: Http;
    hearders: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) {
        this.http = http;

        this.hearders = new Headers();
        this.hearders.append('Content-type', 'application/json');
    }

    cadastra(foto: FotoComponent) {
         return this.http
            .post(this.url, JSON.stringify(foto), {headers: this.hearders});
    }

    lista() {
        return this.http.get(this.url).map(res => res.json());
    }

}