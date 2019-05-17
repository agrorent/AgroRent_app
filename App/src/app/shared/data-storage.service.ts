import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

import {TractorService} from '../recipes/recipe.service';
import {Tractor} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {Apartado} from './ingredient.module';
import {Usuario} from './ingredient.module';


@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: TractorService,
              private authService: AuthService) {}

  storeTractores() {
    const token = this.authService.getToken();
    return this.http.put('https://agrorent-7f6fd.firebaseio.com/tractores.json?auth=' + token,
        this.recipeService.getTractores());
  }

  storeUsuarios() {
      return this.http.put('https://agrorent-7f6fd.firebaseio.com/usuario.json',

            this.recipeService.getUsuarios());
  }

    storeApartados() {
        return this.http.put('https://agrorent-7f6fd.firebaseio.com/apartados.json',

            this.recipeService.getApartados());
    }

  getTractores() {
    const token = this.authService.getToken();
    this.http.get('https://agrorent-7f6fd.firebaseio.com/tractores.json?auth=' + token)
    .pipe(map(
      (response: Response) => {
        const tractores: Tractor[] = response.json();
        for (let tractor of tractores) {
          if (!tractor['caracteristicas']) {
            console.log('tractor');
            tractor['caracteristicas'] = [];
          }
        }
        return tractores;
      }
    ))
    .subscribe(
      (recipes: Tractor[]) => {
        this.recipeService.setTractores(recipes);
        console.log('manda recipes');
      }
    );
  }
  getCurrentProfile() : Observable<Usuario[]> {
    console.log("Obteniendo usuarios");
    return this.http.get('https://agrorent-7f6fd.firebaseio.com/usuario.json')
        .pipe(map(
            (response: Response) => {
                // response.json es una lista de listas
                const parsed_response = response.json();
                const usuarios: Usuario[] = [];

                console.log("Respuesta de usuarios: ");
                console.log(parsed_response);

                // Iteramos sobre la lista de usuarios 
                for (let index in parsed_response) {
                    // Obtenemos cada usuario
                    let temp = parsed_response[index];

                    // El campo 0 representa el nombre, el 4 el correo. 
                    // El constructor de Usuario únicamente necesita estos dos datos, pero se pueden poner más
                    // Agregamos cada objeto usuario a la lista que se devolverá
                    usuarios.push(new Usuario(temp[0], temp[1],temp[2],temp[3],temp[5],temp[4],temp[5]))
                }

                return usuarios;
            }
        ))
}

getUsuarios() {
  console.log("Obteniendo usuarios registrados");
  this.http.get('https://agrorent-7f6fd.firebaseio.com/usuario.json')
      .pipe(map(
          (response: Response) => {
              console.log("Respuesta de usuarios: ");
              console.log(response.json());
              const usuarios: Usuario[] = response.json();
              return usuarios;
          }
      )).subscribe(
      (usuarios: Usuario[]) => {
          this.recipeService.setUsuarios(usuarios);
      }
  );
}

    getApartados() {
        this.http.get('https://agrorent-7f6fd.firebaseio.com/apartados.json')
            .pipe(map(
                (response: Response) => {
                    const apartados: Apartado[] = response.json();
                    return apartados;
                }
            ))
            .subscribe(
                (apartados: Apartado[]) => {
                    this.recipeService.setApartados(apartados);
                    console.log('obtengo apartados');
                }
            );
    }


    getTractoresStart() {
        this.http.get('https://agrorent-7f6fd.firebaseio.com/tractores.json')
            .pipe(map(
                (response: Response) => {
                    const tractores: Tractor[] = response.json();
                    for (let tractor of tractores) {
                        if (!tractor['caracteristicas']) {
                            console.log('tractor');
                            tractor['caracteristicas'] = [];
                        }
                    }
                    return tractores;
                }
            ))
            .subscribe(
                (recipes: Tractor[]) => {
                    this.recipeService.setTractores(recipes);
                    console.log('manda recipes');
                }
            );
    }
}

