import { Component, OnInit, TemplateRef } from '@angular/core';
import { Pet } from '../pet';
import { HttpClient } from '@angular/common/http';
import { AppModule } from '../app.module';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public modalRef: BsModalRef;
  pet = new Pet(0, '', '', 0, '');
  pets;
  selPet;

  constructor(private http: HttpClient, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.listPets();
  }

  listPets() {
    this.pets = [];
    this.http.get('http://localhost:8000/api/v1/pets').subscribe(data => {
      this.pets = data;
    });
  }

  addPet(): void {
    this.http.post('http://localhost:8000/api/v1/pets', this.pet).subscribe(res => {
      this.pet = new Pet(0, '', '', 0, '');
      this.listPets();
    });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openEditModal(template: TemplateRef<any>, p) {
    this.selPet = p;
    this.modalRef = this.modalService.show(template);
  }

  updatePet() {
    this.http.put('http://localhost:8000/api/v1/pets', this.selPet).subscribe(res => {
      this.listPets();
    });
  }

  deletePet() {
    this.http.delete(`http://localhost:8000/api/v1/pets/${this.selPet.id}`).subscribe(res => {
      this.listPets();
    });
  }

}
