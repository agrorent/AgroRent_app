import { Injectable } from '@angular/core';

import { Tractor } from '../recipes/recipe.model';
import { Caracteristica, Apartado } from '../shared/ingredient.module';
import { ApartadoListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()


export class TractorService {
    TractoresChanged = new Subject<Tractor[]>();

    private Tractores: Tractor[] = [
        new Tractor(
            'Prueba',
            'Prueba del status',
            // tslint:disable-next-line:max-line-length
            'https://static.agcanada.com/wp-content/uploads/sites/4/2018/09/0e062cef-ecb3-42df-b508-264.jpg#_ga=2.242393218.1249500168.1554435505-46278877.1554435505',
            [
                new Caracteristica('Kilometros', 12000)
            ],
            'Libre'
        ),
        new Tractor(
            'Prueba',
            'Prueba del status',
            // tslint:disable-next-line:max-line-length
            'https://static.agcanada.com/wp-content/uploads/sites/4/2018/09/0e062cef-ecb3-42df-b508-264.jpg#_ga=2.242393218.1249500168.1554435505-46278877.1554435505',
            [
                new Caracteristica('Kilometros', 12000)
            ],
            'Libre'
        )
    ];
    constructor(private slService: ApartadoListService) {}

    setTractores(Tractores: Tractor[]) {
        this.Tractores = Tractores;
        this.TractoresChanged.next(this.Tractores.slice());
    }

    getTractores() {
        return this.Tractores.slice(); // We get a copy of the array whit slice
    }

    getTractor(index: number) {
        return this.Tractores[index];
    }

    addTractoresToApartado(caracteristicas: Caracteristica[]) {
        this.slService.addCaracteristicas(caracteristicas);
    }

    addTractoresToApartadoPrueba(names: Apartado[]) {
        this.slService.addCaracteristicasPrueba(names);
    }

    addTractor(recipe: Tractor) {
        this.Tractores.push(recipe);
        this.TractoresChanged.next(this.Tractores.slice());
    }

    updateTractor(index: number, newRecipe: Tractor) {
        this.Tractores[index] = newRecipe;
        this.TractoresChanged.next(this.Tractores.slice());
    }

    deleteTractor(index: number) {
        this.Tractores.splice(index,1);
        this.TractoresChanged.next(this.Tractores.slice());
    }
}
