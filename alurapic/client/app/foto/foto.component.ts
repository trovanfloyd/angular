import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FotoComponent{ 

    @Input() titulo: string;
    @Input() url: string;
    @Input() descricao: string;
}