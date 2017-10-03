import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
 selector: 'abilities',
 templateUrl: './abilities.component.html'
})

export class AbilitiesComponent implements OnInit {
 private habilidades: any = [];
 constructor(private http: Http) {
 }

 ngOnInit() {
   let url = 'http://localhost:3000/habilidades/'
   this.http.get(url).subscribe((response: any) => {
     this.habilidades=JSON.parse(response._body);
   })
 }

}
