"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var FotoService = (function () {
    function FotoService(http) {
        this.url = 'v1/fotos';
        this.http = http;
        this.hearders = new http_1.Headers();
        this.hearders.append('Content-type', 'application/json');
    }
    FotoService.prototype.cadastra = function (foto) {
        return this.http
            .post(this.url, JSON.stringify(foto), { headers: this.hearders });
    };
    FotoService.prototype.lista = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    return FotoService;
}());
//# sourceMappingURL=foto.service.js.map