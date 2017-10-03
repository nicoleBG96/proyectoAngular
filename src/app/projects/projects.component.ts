import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private proyectos:any=[]
  constructor(private http: Http) { }

  ngOnInit() {
    let url = 'http://localhost:3000/proyectos/'
    this.http.get(url).subscribe((response:any) => {
        this.proyectos = JSON.parse(response._body);
      })
  }

}
