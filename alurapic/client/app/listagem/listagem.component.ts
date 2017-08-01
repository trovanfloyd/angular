import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{

fotos: FotoComponent[] = [];
service: FotoService;
mensagem: string = '';

    constructor(service: FotoService) {
        this.service = service;
        service.lista()
               .subscribe(fotos => {
                   this.fotos = fotos;
               }, erro => console.log(erro));

    }

    remove(foto) {
        this.service
            .remove(foto)
            .subscribe(
                () => {
                    //realizando um copia do array
                    let novasFotos = this.fotos.slice(0);
                    let indice = novasFotos.indexOf(foto);
                    //removendo a foto do array
                    novasFotos.splice(indice, 1);
                    this.fotos = novasFotos;
                    this.mensagem = 'Foto removida com sucesso!';
                },
                erro => {
                    console.log(erro);
                    this.mensagem = 'Erro ao remover a Foto';
                }
            );

    }
}