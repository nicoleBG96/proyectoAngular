import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  private educacion: any=[];
  constructor(private http:  Http) { }

  ngOnInit() {
    let url = 'http://localhost:3000/educacion/'
    this.http.get(url).subscribe((response:any) => {
        this.educacion = JSON.parse(response._body);
      })
  }

}
