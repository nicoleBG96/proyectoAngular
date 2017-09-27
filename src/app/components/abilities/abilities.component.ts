import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
  private habilidades: any=[];
  constructor() { 
    this.habilidades.push("C++");
    this.habilidades.push("C#");
    this.habilidades.push("Html");
    this.habilidades.push("CSS");
    this.habilidades.push("PHP");
    this.habilidades.push("Java");
  }

  ngOnInit() {
  }

}
