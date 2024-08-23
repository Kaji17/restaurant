import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configurable } from 'src/app/core/config';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient, private configService: Configurable) { }

  /**
   * Ajouter un plat
   * @param dishDto
   * @param images
   * @returns
   */
  public addDish(dishDto: any, images?: any[]) {
    let form = new FormData();
    if (images) {
      images.map((el) => {
        form.append("images", el);
      });
    }
    form.append("dishdto", JSON.stringify(dishDto));
    return this.http.post(this.configService.getApi('DISH_ADD'), form, {
      observe: 'response',
    });
  }

  public gettAllDish(obj: any) {
    return this.http.get(this.configService.getApi("DISH_GET"), {
      observe: "response",
      params: obj,
    });
  }

  public gettAllCategorieDish() {
    return this.http.get(this.configService.getApi("CATEGORI_DISH_GET"), {
      observe: "response"
    });
  }

  deleteDish(dishid: number) {
    return this.http.delete(this.configService.getApi("DISH_DELETE") + dishid,
      {
        observe: "response"
      }
    )
  }

}
