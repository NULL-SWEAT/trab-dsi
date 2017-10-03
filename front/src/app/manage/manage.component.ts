import { Component, OnInit, TemplateRef } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { Pet } from '../pet';
import { HttpClient } from '@angular/common/http';
import { AppModule } from '../app.module';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(private http: HttpClient, private modalService: BsModalService) { }

  pet = new Pet(0, '', '', 0, '');

  addPet():void {
      this.http.post('http://localhost:8000/api/v1/pets', this.pet).subscribe(res => {
    });
    this.pet = new Pet(0, '', '', 0, '');
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

}
