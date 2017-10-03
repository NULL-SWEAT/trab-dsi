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
  pets;
  selPet;

  constructor(private http: HttpClient, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8000/api/v1/pets').subscribe(data => {
      this.pets = data;
    });
  }

  openEditModal(template: TemplateRef<any>, p) {
    console.log(p.name)
    this.selPet = p;
    this.modalRef = this.modalService.show(template);
  }

  updatePet() {
    console.log(this.selPet)
    this.http.put('http://localhost:8000/api/v1/pets', this.selPet).subscribe(res => {
    });
  }

  deletePet() {
    this.http.delete(`http://localhost:8000/api/v1/pets:${this.selPet.id}`).subscribe(res => {
    });
  }

}
