import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: ''
    template:`
        <h2>{{nombre_componente}}</h2>
        <p> {{listado_frutas}} </p>
    `
})
export class FrutaComponent{
    // propiedades dentro de una plantilla
    public nombre_componente = 'compomente de fruta';
    public listado_frutas = ' Naranja, manzana, peras y sandia'
}