import { NotificationPushService } from './../../shared/services/notification-push.service';
import { UtilisService } from './../../shared/services/utilis.service';
import { Page } from './../../shared/interfaces/page.type';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Dish, DishCategorie } from 'src/app/shared/interfaces/dish.type';
import { DishService } from 'src/app/shared/services/dish.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
  value: number;
  statusFilter = '';
  nameSearchValue = '';
  dishs: Dish[] = [];
  categorieDishs: DishCategorie[] =[]
  filteredDish: Dish[] = [];
  pageable: Page = new Page;
  formCreateDish!: FormGroup

  constructor(
    private modalService: NzModalService,
    private dishService: DishService,
    private utilisService: UtilisService,
    private notificationPushService:NotificationPushService,
    private formBuilder: FormBuilder,
  ) {
  }
  ngOnInit(): void {
    this.getAllCategorieDish()
    this.getAllDish(this.pageable)
    this.buildCreatDishForm()

  }
  buildCreatDishForm(){
    this.formCreateDish = this.formBuilder.group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      dishecategoryid: ['', [Validators.required]],
      description: ['']
    })
  }
  getAllCategorieDish() {
    this.dishService.gettAllCategorieDish().subscribe({
      next: (data)=>{
        this.utilisService.response(data, (d:any)=>{
          this.categorieDishs= d.body.content
          console.log("[*] Liste des categories plats {}", this.categorieDishs)
        })
      }
    })
  }
  /**
   * Récuperation de la liste des plats et ajout dans une liste
   * @param pageable
   */
  getAllDish(pageable: Page) {
    this.dishService.gettAllDish(pageable).subscribe({
      next: (data) => {
        this.utilisService.response(data, (d:any)=>{
          this.dishs=d.body.content
          this.filteredDish= d.body.content
          console.log("[*] Liste des plats : {}", this.filteredDish)
        })
      },
      error: (error) => {
        this.utilisService.response(error, (d: any) => {});
      },
    })
  }

  addDish(newDishContent: TemplateRef<{}>) {
    const modal = this.modalService.create({
      nzTitle: 'Ajouter un nouveau plat',
      nzContent: newDishContent,
      nzFooter: [
        {
          label: 'Créer plat',
          type: 'primary',
          onClick: () =>
            this.modalService.confirm({
              nzTitle: 'Are you sure you want to create this project?',
              nzOnOk: () => this.handleAddNewDish()
            })
        }
      ],
      nzWidth: 620,
    });
  }

  handleAddNewDish() {
    let res= this.formCreateDish.value
    res.dishecategoryid=this.formCreateDish.value.dishecategoryid.dishecategoryid
    console.log("Content form {}", res)
    this.dishService.addDish(res).subscribe({
      next:(data)=>{
        this.utilisService.response(data, (d:any)=>{
          console.log("Ajout de plat success : {}", data.body);
          this.notificationPushService.showNotification("success", "Création de plat", "Le plat a été ajouté avec sucès")
          this.getAllDish(new Page)
          this.buildCreatDishForm()
        })
      },
      error: (error) => {
        this.utilisService.response(error, (d: any) => {
          this.notificationPushService.showNotification("error", "Erreur de l'ajout de plat", d.error)
        });
      },
    })
    this.modalService.closeAll()
  }

  searchById(): void {
    if (this.value) {
      this.filteredDish = this.dishs.filter(
        (dish) => dish.disheid == this.value
      );
    } else {
      this.filteredDish = this.dishs;
    }
  }

  filterByName(): void {
    this.filteredDish = this.applyFilters();
  }

  filterByStatus(): void {
    this.filteredDish = this.applyFilters();
  }

  private applyFilters(): Dish[] {
    return this.dishs.filter((dish) =>
      dish.name.toLowerCase().includes(this.nameSearchValue.toLowerCase())
    );
  }

  onDeleteDish(dish:Dish){

    this.dishService.deleteDish(dish.disheid).subscribe({
      next:(data)=>{
        this.utilisService.response(data, (d:any)=>{
          console.log("Suppression plat: {} success", dish.name)
          this.getAllDish(new Page)
          this.notificationPushService.showNotification("info", "Suppression de plat", `Le plat "${dish.name}" a été supprimé avec sucès`)
        })
      },
      error: (error) => {
        this.utilisService.response(error, (d: any) => {
          this.notificationPushService.showNotification("error", "Erreur de Suppression de plat", d.error)
        });
      },
    })
  }
}
